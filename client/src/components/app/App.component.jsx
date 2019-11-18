import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './App.router';
import ErrorBoundary from '../error-boundary/ErrorBoundary.component';
import { store, persistor } from '../../utils/redux/store';

const App = () => (
    <ErrorBoundary>
        <Provider store={ store } >
            {/* Provider sirve para que toda la app pueda accder al store */}
            <PersistGate persistor={ persistor } >
                <AppRouter />
            </PersistGate>
        </Provider>
    </ErrorBoundary>
);

export default App;