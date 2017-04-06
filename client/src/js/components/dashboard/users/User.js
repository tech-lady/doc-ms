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
          <tr>
            <td>{this.props.user.username}</td>
            <td>{this.props.user.firstname}</td>
            <td>{this.props.user.lastname}</td>
            <td>{this.props.user.email}</td>
            <td>
              <Link to={`/dashboard/users/${this.props.user.id}`}><i className="icon-change material-icons prefix">remove_red_eye</i></Link>
            </td>
            <td><i className="icon-change material-icons prefix">delete</i></td>
          </tr>

    );
  }
}



export default User;