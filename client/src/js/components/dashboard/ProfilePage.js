import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import  * as auth from '../../actions/Authentication'; 
import { bindActionCreators } from 'redux' 


class Profile extends React.Component {

  render() {
    return (
      <div>
       <h3>Welcome to my profile page</h3>
       <p> I am Olayemi Awofadeju. This Document Mangement System Web application is my Checkpoint Finale project.</p>
      </div>
    );
  }
}


export default Profile