import React from 'react';



class Document extends React.Component {

  render() {
    return (
      <div>
          <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
        </div>
      </div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="input_text" type="text" placeholder="Type Your title" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" placeholder="Type Your documnent"></textarea>
            </div>
          </div>
        </form>
      </div>
    );
  }


}