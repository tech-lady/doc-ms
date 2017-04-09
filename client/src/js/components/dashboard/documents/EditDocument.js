import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDocument } from '../../../actions/Documents';


class EditDocument extends React.Component {



  componentWillMount() {
    this.props.getDoc(this.props.params.id)
  }


  render() {
    return (
      <div>
          <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        </div>
        <div className="input-field col s12">
            <select multiple>
              <option value="" disabled selected> User Access</option>
              <option value="1">Public</option>
              <option value="2">Private</option>
            <optgroup label="User Role">
                <option value="3">Admin</option>
                <option value="4">Regular</option>
          </optgroup>
            </select>
        </div>
        <div className="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="input_text" type="text" placeholder="Type Your title" />
            </div>
           
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" placeholder="Type Your document"></textarea>
            </div>
          </div>
        </form>
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
  return {
    getDoc: bindActionCreators(getDocument, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDocument);