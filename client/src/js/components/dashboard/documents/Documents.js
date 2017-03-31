import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../Search';
import Document from './Document';
import DocumentApi from '../../../utils/DocumentsApi';
import { loadDocuments } from '../../../actions/Documents';


class Documents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: []
    }
    this.renderDocument = this.renderDocument.bind(this);
  }
  

  // componentWillMount() {
  //   this.props.loadDocuments()
  //   console.log(this.state);
  // }

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
        <Search />
         <div className="documents">
            <div className="row">
              {this.props.documents.map(this.renderDocument)}
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    documents: state.documents
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadDocuments: bindActionCreators(loadDocuments, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Documents);
