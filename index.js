import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {PokeProvider} from "./context";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PokeProvider>
                <App/>
            </PokeProvider>
        </Provider>
    </React.StrictMode>
);
