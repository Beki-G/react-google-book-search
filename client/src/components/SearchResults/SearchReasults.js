import React from 'react'
import BookResultTable from '../BookResultTable/BookResultTable'
import './styles.css'


function SearchResults({data}){
    return(
        <div className="SearchResults">
            <BookResultTable data={data} />
        </div>
    )
}

export default SearchResults