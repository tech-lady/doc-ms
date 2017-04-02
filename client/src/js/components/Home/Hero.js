import React from 'react';

class Hero extends React.Component {

  render() {
    return(
     <div>
      <div className="hero">
        <div className="jumbotron">
          <h1><strong className="bold">Document Management System</strong></h1>
          <span>A web application for creating and managing private and public documents</span>
        </div>
      </div>
      <div className="col m12">
        <div className="center-align">
          <a className="btn btn-large waves-effect waves-light" type="submit" name="action">Getting started</a>
        </div>
      </div>
    </div>
    );
  }
}

export default Hero;