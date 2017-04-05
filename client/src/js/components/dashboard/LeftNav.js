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
            <h4><strong>Document Management User Dashboard</strong></h4>
             <li>
              <Link to="/" ><strong>Home</strong></Link>
              <i className="material-icons prefix">room</i>
            </li>
            <li>
              <Link to="/dashboard" ><strong>My</strong> Documents</Link>
              <i className="material-icons prefix">library_add</i>
            </li>
            <li>
              <Link to="/profile"><strong>My</strong> Profile</Link>
              <i className="material-icons prefix">person_pin</i>  
            </li>
            <li>
              <Link to="/roles">Roles</Link>
              <i className="material-icons prefix">reorder</i>
            </li>
            <li>
                <Link to="/users">Users</Link>
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