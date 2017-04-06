import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { loadUsers } from '../../../actions/Users';
import { bindActionCreators } from 'redux';
import User from './User';
class UserList extends React.Component {
  
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  renderUsers(user) {
    return <User key={user.id} user={user} />
  }
render() {
  console.log(this.props)
    return (
      <div>
        <table className="striped bordered responsive-table">
          <thead>
            <tr>
              <th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>View</th>
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            { this.props.users.map(this.renderUsers.bind(this))}
          </tbody>
        </table>
      </div>
   );
  }
}

const mapStateToProps = (state) =>  {
  return {
    users:  state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers:  bindActionCreators(loadUsers, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);