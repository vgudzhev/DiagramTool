import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="masthead">
        <ul className="nav nav-pills pull-right">
          <li>
            <Link to="/#">MenuItem1</Link>
          </li>
          <li>
            <Link to="/#">MenuItem2</Link>
          </li>
          <li>
            <Link to="/monitor">MenuItem3</Link>
          </li>
        </ul>
        <h1><Link to="/#">ProjectName</Link></h1>
        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
