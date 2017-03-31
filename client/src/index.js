import React from 'react';  
import ReactDOM from 'react-dom';  
import { Provider } from 'react-redux';  
import { createStore, applyMiddleware } from 'redux';  
import { Router, browserHistory } from 'react-router';  

import "../src/css/style.scss";;
import routes from './routes';
import storeConfig from './js/stores/StoreConfig';
import { loadDocuments } from './js/actions/Documents';

const store = storeConfig();
// store.dispatch(loadDocuments());

ReactDOM.render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes}  />
    </Provider>,
    document.getElementById('app')
);