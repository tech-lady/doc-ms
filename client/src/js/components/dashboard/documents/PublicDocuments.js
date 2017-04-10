import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Row, Col, Icon } from 'react-materialize';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Search from '../Search';
import Document from './Document';
import DocumentApi from '../../../utils/DocumentsApi';
import { loadDocuments, searchDocument } from '../../../actions/Documents';
import CreateDocument from './CreateDocument';
import modal from '../../common/modal';
import { getPayload } from '../../../utils/helpers';


class PublicDocuments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.renderDocument = this.renderDocument.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleSearch(event){
    this.setState({ query: event.target.result   })
    this.props.searchDocument(getPayload().id, event.target.value);
  }

    onClick(e) {
      this.setState({ showCreate: true });
    }

    componentDidMount() {
      this.props.loadDocuments()
    }

  renderDocument(document) {
    return <Document key={document.id} document={document}/>
  }

  render() {
   return (

    <div>
     <Modal
        header='Modal Header'
        trigger={
   <a className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">add</i></a>
      }>
      <CreateDocument />
      </Modal>
      <div>
        <Search  handleSearch={this.handleSearch}  value={this.state.value}/>
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
    loadDocuments: bindActionCreators(loadDocuments, dispatch),
    searchDocument: bindActionCreators(searchDocument, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicDocuments);
