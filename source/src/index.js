import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory  } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from 'store/configureStore';
import App from 'containers/app';
import Design from 'components/Design/index';

const store = configureStore();
render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} />
            <Route path="/home" component={App} />
            <Route path="/design" component={Design} />
        </Router>
    </Provider>
), document.querySelector('#container'));