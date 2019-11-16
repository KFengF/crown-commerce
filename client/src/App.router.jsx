import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/Header.component';
import LoadingSpinner from './components/loading-spinner/LoadingSpinner.component';
import { currentUserSelector } from './utils/redux/user/user.selectors';
import { GlobalStyle } from './global.styles';

const HomePage = lazy(() => import('./pages/home-page/Home.page'));
const ShopRouter = lazy(() => import('./pages/shop-page/Shop.router'));
const FormsPage = lazy(() => import('./pages/forms-page/Forms.page'));
const CheckoutPage = lazy(() => import('./pages/checkout-page/Checkout.page'));
/* lazy es una funcion para importar dinamicamente (Asincrono) cuando el 
componente se necesite */

class AppRouter extends React.Component {
	/* unsubscribeFromAuth = null; */

	/* componentDidMount() {
		 antes de usar saga:
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			//Este metodo invoca el callback cuando se logea o deslogea
			//La sesion del usuario persiste hasta que se deslogee

			if (userAuth) {
				//Si se logea
				const userRef = getUserDocReference(userAuth);
	
				userRef.onSnapshot(snapshot => {
					//este metodo permite usar el snapshot, y esta pendiente
					//de cambios en el snapshot
	
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else { //si se deslogea
				setCurrentUser(null);
			}
		}, error => console.log(error));

		 La funcion para agregar los items al firebase
		addCollsAndDocs(
			'collections', 
			Object.keys(collections).map(key => ({
				title: key,
				items: collections[key].items
			}))
		); 
	}

	componentWillUnmount() {
		 this.unsubscribeFromAuth();
	} */

	render() {
		return (
			<BrowserRouter>
				<GlobalStyle />
				<Header />
				<Switch>
					<Suspense fallback={ <LoadingSpinner /> } >
						{/* Suspense es para que mientras se carga se ponga el fallback */}
						<Route exact path="/" component={ HomePage } />
						<Route path="/shop" component={ ShopRouter } />
						<Route exact path="/signin" render={ 
							() => this.props.currentUser ? <Redirect to='/' /> : <FormsPage /> 
						} />
						<Route exact path="/checkout" component={ CheckoutPage } />
					</Suspense>
				</Switch>
			</BrowserRouter>
		);
	}
}


const mapStateToProps = createStructuredSelector({ 
	currentUser: currentUserSelector
});


/* const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
}); */

export default connect(mapStateToProps)(AppRouter);
/* connect es un high order component, devuelve un componente con 
la funcion setCurrentUser como props esta actualiza el store con 
otro setCurrentUser que esta en redux/user/userAction.js y esta 
funcion devuelve un objeto con propiedades payload y type */