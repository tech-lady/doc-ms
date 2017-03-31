import React from 'react';

class Hero extends React.Component {

  render() {
    return(
     <div>
      <div className="hero">
        <div className="jumbotron">
          <h1><strong className="bold">Document Magement App</strong></h1>
          <span>The system manages documents, users and user roles</span>
        </div>
      </div>
      <div className="col s12">
        <div className="center-align">
          <a className="btn btn-large waves-effect waves-light" type="submit" name="action">Getting started</a>
          <a className="btn btn-large waves-effect waves-light" type="submit" name="action">Learn More</a>
        </div>
      </div>
    </div>
    );
  }
}

export default Hero;