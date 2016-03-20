import React from 'react';
import { render } from 'react-dom';

import Dashboard from 'containers/dashboard';
import Footer from 'containers/footer';
import DynamicContainer from 'containers/dynamicContainer';

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

export default App;
