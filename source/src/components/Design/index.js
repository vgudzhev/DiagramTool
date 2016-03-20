import React from 'react';

import Dashboard from 'containers/dashboard';
import Footer from 'containers/footer';
import Menu from 'components/Design/menu';
import Playground from 'components/Design/playground';

class Design extends React.Component {

    render() {
        return (
            <div>
                <Dashboard />
                <div className="row">
                    <div className="col-md-2">
                        <Menu url="/data/components.json" pollInterval={2000} />
                    </div>
                    <div className="col-md-10">
                        <Playground />
                    </div>
                </div>
            </div>
        );
    }
}

export default Design;
