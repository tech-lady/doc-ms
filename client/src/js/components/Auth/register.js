import React from 'react';
import { bindActionCreators }  from 'redux';
import { TextInput } from '../common/forms';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/Authentication';

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        username: '', 
        email: '', 
        password: '', 
        firstname: '', 
        lastname: ''

    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    this.setState({
      [e.target.name ] : e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.register(this.state);
  }
  render() {
    return(
     <div>
        <div className="col m6 l6 s12 form-right">
          <div className="register">
            <p><strong>Sign up as a New User</strong></p>
            <div className="row">
    
              <form onSubmit={this.onSubmit} className="col s12">
                <div className="row">
                  <TextInput
                      id="first_name"
                      type="text"
                      cls="col m6 l6 s12"
                      value={this.state.firstName}
                      className="validate" 
                      name="firstname"
                      label= "First Name"
                      onChange={this.onChange} /> 
                <TextInput
                    id="last_name"
                    type="text"
                    cls="col m6 l6 s12"
                    value={this.state.lastName}
                    className="validate" 
                    name="lastname"
                    label= "Last Name"
                    onChange={this.onChange} /> 
                </div>

                <div className="row">
                  <TextInput
                      id="last_name"
                      type="text" 
                      value={this.state.username}
                      className="validate" 
                      name="username"
                      label="Username"
                      onChange={this.onChange} /> 
                </div>
                
                <div className="row">
                  <TextInput
                    id= "email"
                    type="email" 
                    className="validate" 
                    name="email"
                    label="Email"
                    value={this.state.email} 
                    onChange={this.onChange} />
                </div>
               
                <div className="row">
                  <TextInput
                    type="password" 
                    className="validate"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    label="Password"
                    />
                </div>          
                <div className="row">
                  <div className="col m12 l12 s12 ">
                    <button className="btn btn-large waves-effect waves-light"> Signup </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
     </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: bindActionCreators(registerUser, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)