import React from 'react';
import { Link } from 'react-router';

import { summarize } from '../../../utils/helpers'; 
import  ListUsers from './viewDocument';

class User extends React.Component {
  
  constructor(props) {
    super(props);
  }
render() {
    return (

<div className="row">
  <p><strong>User Profile Details</strong></p>
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <Textinput placeholder="Placeholder" id="first_name" type="text" class="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <Textinput id="last_name" type="text" class="validate" />
          <label for="last_name">Last Name</label>
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
          <Textinput id="password" type="password" class="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <Textinput id="email" type="email" class="validate" />
          <label for="email">Email</label>
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
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
    </form>
  </div>
   )
  }
}