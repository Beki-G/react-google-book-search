import React from 'react';
import NavBar from '../components/NavBar'
import SearchBar from '../components/SearchBar/SearchBar';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import SearchResults from '../components/SearchResults/SearchReasults';

function Search(){
    return(
        <div>
            <NavBar />
            <SearchHeader />
            <SearchBar />
            <SearchResults />
        </div>
    )
}

export default Search;