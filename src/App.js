import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { auth, createUserDoc } from './utils/firebase';
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
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//Este metodo invoca el callback cuando se logea o deslogea
			//La sesion del usuario persiste hasta que se deslogee

			if (userAuth) {
				//Si se logea
				const userRef = await createUserDoc(userAuth);
	
				userRef.onSnapshot(snapshot => {
					/* este metodo se usa para chekear si el base de datos cambio
					pero lo usamos porque cada vez que lo llamamos nos da un 
					callback con el objeto snapshot */
	
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
					}, () => console.log(this.state));
				});
			} else { //si se deslogea
				this.setState({ currentUser: userAuth }, () => console.log(this.state))
			}
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