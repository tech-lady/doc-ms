import React from 'react';
import { Link } from 'react-router';

class HowTo extends React.Component {

  render() {
    return(
     <div>
      <div className="parallax-container">
        <div className="parallax"></div>
        <div className="container">
          <div className="row">
            <div className="how">
              <h3>How to use the Document Management Application</h3>
              <ol>
                <Link to='/login'><li><strong><em>Create</em></strong> an account</li></Link>
               <Link to='/login'> <li><strong><em>Login</em></strong> to your account</li></Link>
                <Link to='/'><li>Access <strong><em>Unlimited</em></strong> documents</li></Link>
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