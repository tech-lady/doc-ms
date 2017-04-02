import React from 'react';

class HowTo extends React.Component {

  render() {
    return(
     <div>
      <div className="parallax-container">
        <div className="parallax"><img src="../assets/img/Untitled-2.jpg" /></div>
        <div className="container">
          <div className="row">
            <div className="how">
              <h1>How to use the Document Management Application</h1>
              <ol>
                <li><strong>Create</strong> an account</li>
                <li><strong>Login</strong> to your account</li>
                <li>Access <strong>unlimited</strong> documents</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default HowTo;