import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducers,
    applyMiddleware(thunk,promiseMiddleware())
)

ReactDOM.render(
<Provider store={store}>
<Router
    history={browserHistory}
    routes={routes}
/>
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();