import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Search from '../Search';
import Document from './Document';
import DocumentApi from '../../../utils/DocumentsApi';
import { loadDocuments } from '../../../actions/Documents';
import CreateDocument from './CreateDocument';
import modal from '../../common/modal';


class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [],
    }
    this.renderDocument = this.renderDocument.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  

  // componentWillMount() {
  //   this.props.loadDocuments()
  //   console.log(this.state);
  // }

    onClick(e) {
      this.setState({ showCreate: true });
    }

    componentDidMount() {
      this.props.loadDocuments()
      console.log(this.state);
    }

  renderDocument(document) {
    return <Document key={document.id} document={document}/>
  }

  render() {
   return (

    <div>
      <modal modal="modal1"  Component={CreateDocument} />
    <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></a>
      <div>
        <Search />
         <div className="documents">
            <div className="row">
              {this.props.documents.map(this.renderDocument)}
            </div>
          </div>
      </div>
      </div>
    );
  }
}

Documents.contextTypes = {
  router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    documents : state.documents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDocuments: bindActionCreators(loadDocuments, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
