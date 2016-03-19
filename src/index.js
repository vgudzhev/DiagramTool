import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router';

import Dashboard from 'dashboard';
import DynamicContainer from 'dynamicContainer';
import Footer from 'footer';

class App extends React.Component {
    render() {
        return (
            <div className='container-narrow'>
                <Dashboard />
                <DynamicContainer />
                <Footer />
            </div>
        );
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App} />
    </Router>

), document.querySelector('#container'));

export default App;
