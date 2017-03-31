import React from 'react';
import Footer from './components/common/footer';
import Header from './components/common/header';
import { isAuthenticated } from './utils/helpers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from './actions/AuthenticationAction'; 

class App extends React.Component {
  componentWillMount() {
    if(isAuthenticated()) {
      this.props.authenticate()
    }
  }
  render() {
  
    return(
      <div>
          {this.props.children}
      </div>
            
    );
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    authenticate: bindActionCreators(authenticate, dispatch)
  }
}
export default connect(null, mapDispatchToProp)(App);