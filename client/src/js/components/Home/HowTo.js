import React from 'react';

class HowTo extends React.Component {

  render() {
    return(
     <div>
      <div className="parallax-container">
        <div className="parallax"><img src="/src/assets/img/document-library.png" /></div>
        <div className="container">
          <div className="row">
            <div className="how">
              <h3>How to use the Document Management Application</h3>
              <ol>
                <li><strong><em>Create</em></strong> an account</li>
                <li><strong><em>Login</em></strong> to your account</li>
                <li>Access <strong><em>Unlimited</em></strong> documents</li>
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