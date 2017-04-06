import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getDocument } from '../../../actions/Documents';
import { bindActionCreators } from 'redux'


import Modal from '../../common/modal';

class ViewDocument extends Component {
  componentWillMount() {
    console.log(this.props)
    this.props.getDoc(this.props.params.id)
  }

  renderDocument(document) {
    console.log(document);
          console.log(Modal)

    return (
      <div>
        <div className="col s12 m12" key={document.id}>
          <div className="card darken-1">
            <div className="card-content ">
              <span className="card-title">{document.title}</span>
              <p>{document.content}</p>
            </div>
            <div className="card-action">
              <div className="row"> 
                <div className="col s4 m4">
                  <Link to={`/dashboard/documents/${document.id}`}> <i 
                    className="material-icons prefix">remove_red_eye</i></Link>
                </div>
                  <div className="col s4 m4">
                    <a href="#mode"> <i className="material-icons prefix">mode_edit</i></a>              </div>
                <div className="col s4 m4">
                  <a href="#"> <i className="material-icons prefix">delete</i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<Modal key={document.id} />*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewDocument);