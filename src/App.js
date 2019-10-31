import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/Header';
import HomePage from './pages/home-page/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import FormsPage from './pages/forms-page/FormsPage';
import CheckoutPage from './pages/checkout-page/CheckoutPage';
import setCurrentUser from './utils/redux/user/userActions';
import { currentUserSelector } from './utils/redux/user/userSelectors';
import { auth, getUserDocReference } from './utils/firebase/firebase';
import './App.css';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//Este metodo invoca el callback cuando se logea o deslogea
			//La sesion del usuario persiste hasta que se deslogee

			if (userAuth) {
				//Si se logea
				const userRef = getUserDocReference(userAuth);
	
				userRef.onSnapshot(snapshot => {
					/* este metodo se usa para chekear si el base de datos cambio
					pero lo usamos porque cada vez que lo llamamos nos da un 
					callback con el objeto snapshot */
	
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else { //si se deslogea
				setCurrentUser(null);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/" component={ HomePage } />
					<Route path="/shop" component={ ShopPage } />
					<Route exact path="/signin" render={ 
						() => this.props.currentUser ? <Redirect to='/' /> : <FormsPage /> 
					} />
					<Route exact path="/checkout" component={ CheckoutPage } />
				</Switch>
			</BrowserRouter>
		);
	}
}


const mapStateToProps = createStructuredSelector({ 
    currentUser: currentUserSelector
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* connect es un high order component, devuelve un componente con 
la funcion setCurrentUser como props esta actualiza el store con 
otro setCurrentUser que esta en redux/user/userAction.js y esta 
funcion devuelve un objeto con propiedades payload y type */