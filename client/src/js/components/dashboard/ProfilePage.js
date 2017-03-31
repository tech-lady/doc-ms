import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import  * as auth from '../../actions/AuthenticationAction'; 
import { bindActionCreators } from 'redux' 


class Profile extends React.Component {

  render() {
    return (
      <div>
       <h1>Welcome to my profile page</h1>
      </div>
    );
  }
}


export default Profile