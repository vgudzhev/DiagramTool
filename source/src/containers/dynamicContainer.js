import React from 'react';

class DynamicContainer extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Diagram tool</h1>
          <h2>built with :</h2>
          <ul>
              <li>React</li>
              <li>JSX</li>
              <li>Redux</li>
              <li>React-router</li>
              <li>jQuery</li>
              <li>JointJS</li>
          </ul>
        <p><a className="btn btn-primary btn-lg" href="#">Learn more</a></p>
      </div>
    );
  }
}

export default DynamicContainer;
