import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import  * as auth from '../../actions/Authentication'; 
import { bindActionCreators } from 'redux' 


class Profile extends React.Component {

  render() {
    return (
      <div className="row">
         <div className="col s6 m10" >
        <div className="card darken-1">
          <div className="card-content ">
            <span className="card-title">My Profile</span>
            <p>Name: Olayemi Awofadeju</p>
       <p>Project: Checkpoint Finale Defense</p>
      </div>
      </div>
      </div>
      </div>
    );
  }
}


export default Profile