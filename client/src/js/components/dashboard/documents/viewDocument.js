import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDocument } from '../../../actions/DocumentsActions';
import { bindActionCreators } from 'redux'

class ViewDocument extends Component {
  componentWillMount() {
    this.props.getDoc(this.props.params.id)
  }

  renderDocument(document) {
    return (
      <div key={document.id} className="single-doc">
        <h1 className="center-align">{document.title}</h1>
        <p>{document.content}</p>
      </div>
    )
  }

  render() {

    return (
      <div>
        {this.props.doc.map(this.renderDocument.bind(this))}
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    doc: state.documents
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    getDoc: bindActionCreators(getDocument, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewDocument)