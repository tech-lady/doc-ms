import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getUsers } from '../../../actions/Users';
import { summarize } from '../../../utils/helpers'; 
import { bindActionCreators } from 'redux'

class viewUser extends React.Component {
  
  constructor(props) {
    super(props);
  }
    componentWillMount() {
    this.props.getUser(this.props.params.id)
  }
renderUser(user) {
    return (

<div className="row">
  <p><strong>User Profile Details</strong></p>
    <form className="col s12"key={user.id}>
      <div className="row">
        <div className="input-field col s6">
          <Textinput placeholder="Placeholder" id="first_name" type="text" class="validate" />
          <label for="first_name">First Name : {user.firstname}</label>
        </div>
        <div className="input-field col s6">
          <Textinput id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name : {user.lastname}</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <Textinput disabled value="I am not editable" id="disabled" type="text" class="validate" />
          <label for="disabled">Disabled</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <Textinput id="email" type="email" class="validate" />
          <label for="email">Email: {user.email}</label>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          This is an inline input field:
          <div className="input-field inline">
            <Textinput id="email" type="email" class="validate" />
            <label for="email" data-error="wrong" data-success="right">Email</label>
          </div>
        </div>
        <div className="input-field col s12">
          <select>
            <option value="" disabled selected>Choose your option</option>
            <option value="1">Admin</option>
            <option value="2">Regular</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
    </form>
  </div>
   )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    getDoc: bindActionCreators(getUser, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(viewUser)