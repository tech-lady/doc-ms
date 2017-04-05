import React from 'react';
import { Link } from 'react-router';

import { summarize } from '../../../utils/helpers'; 
import  ViewUser from './viewUser';



class User extends React.Component {
constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
    <div className="row">
        <div className="col s8 m10">
          <div className="card darken-1">
            <div className="card-content ">
              console.log({this.props.user.id})
              <span className="card-title">User {this.props.user.id}</span>
              <p>Username: {this.props.user.username}</p>
              <p>Firstname: {this.props.user.firstname}</p>
              <p>Lastname: {this.props.user.lastname}</p>
              <p>Email: {this.props.user.email}</p>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s4 m4">
                  <Link to={`/dashboard/users/${this.props.user.id}`}>
                  <i className="material-icons prefix">remove_red_eye</i></Link>
                </div>
                <div className="col s4 m4">
                  <a href="#"> <i className="material-icons prefix">delete</i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}



export default User;