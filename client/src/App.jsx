import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './App.router';
import { store, persistor } from './utils/redux/store';

const App = () => (
    <Provider store={ store } >
        {/* Provider sirve para que toda la app pueda accder al store */}
        <PersistGate persistor={ persistor } >
            <AppRouter />
        </PersistGate>
    </Provider>
);

export default App;