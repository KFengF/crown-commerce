import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './App.router';
import SomethingWrongHandler from '../components/something-wrong/SomethingWrong.handler';
import Header from '../components/header/Header.component';
import LoadingSpinner from '../components/loading-spinner/LoadingSpinner.component';
import { store, persistor } from '../utils/redux/store';
import { GlobalStyle } from '../global.styles';

const App = () => (
    <SomethingWrongHandler>
        <Provider store={ store } >
            {/* Provider sirve para que toda la app pueda accder al store */}
            <PersistGate persistor={ persistor } >
                <BrowserRouter>
                    <Header />
                    <GlobalStyle />
                    <Suspense fallback={ <LoadingSpinner /> } >
                        {/* Suspense es para que mientras se carga se ponga el fallback */}
                        <AppRouter />
                    </Suspense>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </SomethingWrongHandler>
);

export default App;