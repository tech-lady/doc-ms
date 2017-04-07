import React from 'react';


const Search = ({handleSearch, value}) => {
    return (
      <div>
        <div className="search">
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <i className="icon-change material-icons prefix">search</i>
                  <input 
                    type="text" 
                    id="autocomplete-input" 
                    value={value}
                    className="autocomplete" 
                    onChange={handleSearch}/>
                  <label htmlFor="autocomplete-input">search</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Search;