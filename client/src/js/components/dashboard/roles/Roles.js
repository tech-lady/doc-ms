import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Search from '../Search';
import Document from './Document';
import DocumentApi from '../../../utils/DocumentsApi';
import { loadDocuments } from '../../../actions/Documents';
import CreateDocument from './CreateDocument';


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

 <a className="modal-trigger btn-floating btn-large waves-effect waves-light" href="#modal1"><i className="material-icons">add</i></a>
  <div id="modal1" className="modal modal-fixed-footer">
    <div class="modal-content">
    <CreateDocument />
    </div>
  </div>
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
  const documents = state.documents.rows || [];
  return {
    documents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDocuments: bindActionCreators(loadDocuments, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
