import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import  * as auth from '../../actions/Authentication'; 
import { bindActionCreators } from 'redux' 


class LeftNav extends React.Component {

  render() {
    return (
      <div>
        <div className="col m3">
          <ul id="slide-out" className="side-nav fixed">
            <h1><strong>Document Manager App</strong></h1>
            <li>
              <Link to="/dashboard" ><strong>My</strong> Documents</Link>
              <i className="material-icons prefix">library_books</i>
            </li>
            <li>
              <Link to="dashboard/profile">Profile</Link>
              <i className="material-icons prefix">person</i>  
            </li>
            <li>
              <Link to="profile">Roles</Link>
              <i className="material-icons prefix">access</i>
            </li>
            <li>
              <Link>Users</Link>
              <i className="material-icons prefix">group</i>  
            </li>
            <li>
              <a href="#!" onClick={this.props.actions.logoutUser}>Logout</a>
              <i className="material-icons prefix">power</i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(auth, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(LeftNav);