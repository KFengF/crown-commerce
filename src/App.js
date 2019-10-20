import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { auth } from './utils/firebase';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Header from './components/header/Header';
import Forms from './pages/forms/Forms';
import './App.css';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null
		}

		this.unsubscribeFromAuth = null;
	}

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(userState => {
			//Este metodo invoca el callback cuando esta autenticado
			//La sesion del usuario persiste hasta que se deslogee
			this.setState({ currentUser: userState });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<BrowserRouter>
				<Header currentUser={ this.state.currentUser } />
				<Switch>
					<Route exact path="/" component={ Home } />
					<Route path="/shop" component={ Shop } />
					<Route path="/signin" component={ Forms } />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;