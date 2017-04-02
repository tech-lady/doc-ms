import React from 'react';


class Footer extends React.Component {
  render() {
    return(
       <footer>
        <div className="container">
          <div className="row">
            <div className="col l6 m6 s12">
              <p className="float-left">&copy 2017 Doc-api Project</p>
            </div>
            <div className="col l6 m6 s12">
              <p>Checkpoint</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;