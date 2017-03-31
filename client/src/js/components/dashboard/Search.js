import React from 'react';



class Search extends React.Component {

  render() {
    return (
      <div>
        <div className="search">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">search</i>
                  <input type="text" id="autocomplete-input" className="autocomplete" />
                  <label htmlFor="autocomplete-input">search</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;