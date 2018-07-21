import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from "./reducers/reducer"
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
    <Router>
        <Provider store={store} >
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
