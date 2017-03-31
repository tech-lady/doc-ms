import React from 'react';


class Footer extends React.Component {
  render() {
    return(
       <footer>
        <div className="container">
          <div className="row">
            <div className="col l6 m6 s12">
              <p className="float-left">&copy 2017 Project</p>
            </div>
            <div className="col l6 m6 s12">
              <p>API consumer</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;