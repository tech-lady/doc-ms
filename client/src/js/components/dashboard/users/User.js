import React from 'react';



class User extends React.Component {

  render() {
    return (
    <div className="row">
        <div className="col s12 m3">
          <div className="card darken-1">
            <div className="card-content ">
              <span className="card-title">{this.props.user.firstname}</span>
              <p>Hale somebody is here</p>
            </div>
            <div className="card-action">
              <div className="row">
                <div className="col s4 m4">
                  <i className="material-icons prefix">remove_red_eye</i>
                </div>
                <div className="col s8 m8">
                  <a href="#"> <i class="material-icons prefix">delete</i></a>
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