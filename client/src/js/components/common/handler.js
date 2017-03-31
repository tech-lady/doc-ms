import React, { Component } from 'react';



class Handler extends Component {
  render() {
    return (
      <div>
        <div class="alert-{this.props.type} alert">
          <p>{this.props.message}</p>
        </div>

      <div>

    );
  }
}