import React from 'react';

function SearchBar(){
    return(
        <div className="SearchBar">
            
            <h3 className="mt-4">Book Search</h3>

            <div className="input-group mt-4 mb-3">
                <button className="btn btn-outline-secondary" type="button" id="bookSearch">Search</button>
                <input type="text" className="form-control" placeholder="Book Title" aria-label="Book Search Input"aria-describedby="Book Search Input" />
            </div>
        </div>
    )
}

export default SearchBar;