import React from 'react';
import LeftNav from './LeftNav';
import Documents from './documents/Documents';
import Authentication from '../Auth/Authentication';

class DashboardPage extends React.Component {
  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="row">
            <div className="col m3">
              <LeftNav />
            </div>
            <div className="col m9">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Authentication(DashboardPage);