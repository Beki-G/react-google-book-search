import React from 'react'
import './styles.css'

function SearchHeader() {
    return (
        <div className="card text-center align-items-center" >
            <br />
            <div className="card-body">
                <h5 className="card-title">React Google Book Search</h5>
                <h6 className="card-subtitle mb-2 text-muted align-items-center">Search for you books that you want to read later on and save them!</h6>
            </div>
        </div>
    )
}

export default SearchHeader;