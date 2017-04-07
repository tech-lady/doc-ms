import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Search from '../Search';
import Role from './Role';
import RoleApi from '../../../utils/RolesApi';
import { loadRoles } from '../../../actions/Roles';
import CreateRole from './CreateRole';
import { Modal, Button, Row, Col, Icon } from 'react-materialize';

class Roles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
    }
    this.renderRole = this.renderRole.bind(this);
    // this.onClick = this.onClick.bind(this);
  }
  

  // componentWillMount() {
  //   this.props.loadDocuments()
  //   console.log(this.state);
  // }

  //   onClick(e) {
  //     this.setState({ showCreate: true });
  //   }

    componentDidMount() {
      this.props.loadRoles();
      console.log(this.state);
    }

  renderRole(role) {
    return <Role key={role.id} role={role}/>
  }

  render() {
   return (
    <div>
     <Modal
        header='Modal Header'
        trigger={
        <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></a>
      }>
      <CreateRole />
      </Modal>
      <div>
        <Search />
         <div className="roles">
            <div className="row">
              {this.props.roles.map(this.renderRole)}
            </div>
          </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const roles = state.roles || [];
  return {
    roles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRoles: bindActionCreators(loadRoles, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Roles);

// export default Roles;
