import React, { useState } from 'react';
import NavBar from '../components/NavBar/NavBar'
import SearchBar from '../components/SearchBar/SearchBar';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import SearchResults from '../components/SearchResults/SearchReasults';
import API from '../utils/API';


function Search(){
    const [books, setBooks] = useState([]);
    const [searchTitle, setSearchTitle] = useState({});

    async function searchBook(){
        const title = searchTitle.title
        // console.log("Search title is: ", title)
        const apiRes = await API.googleSearchBook(title)
        // console.log("apiRes from pages/Search is: ", apiRes.data);
        setBooks(apiRes.data)
    }

    function handleSearchChange(event){
        const bookTitle = event.target.value;
        setSearchTitle({title: bookTitle})
    }

    async function saveBook(event){
        const book = books[event.target.id];

        const apiRes = await API.saveBook({
            title: book.volumeInfo.title, 
            authors: book.volumeInfo.authors,
            image:book.volumeInfo.imageLinks.thumbnail, 
            description: book.volumeInfo.description, 
            link:book.volumeInfo.canonicalVolumeLink
        })

        console.log("API Res from saveBook is: ", apiRes.data)
    }

    return(
        <div>
            <NavBar />
            <SearchHeader />
            <SearchBar onClick={searchBook} onChange = {handleSearchChange}/>
            <SearchResults data = {books.map((book, index)=>{
            return (
                <tr key={book.id} id={book.id}>
                    <td className="imgColumn">
                        <div>
                            <strong>Title: </strong>{book.volumeInfo.title}<br />
                            <strong>Authors: </strong>{book.volumeInfo.authors.join(", ")}
                        </div>
                        <img alt={`Cover Art of ${book.volumeInfo.title}`} src={book.volumeInfo.imageLinks?.thumbnail ||"https://via.placeholder.com/150/000000/FFFFFF/?text=Cover+Not+Available"} />
                    </td>
                    <td>
                        <strong>Description: </strong>{book.volumeInfo.description}
                        <br /><br />
                        <button><a href= {book.volumeInfo.canonicalVolumeLink} target="_blank" rel="noopener noreferrer">View</a></button>
                        <button id={index} onClick={saveBook}>Save</button>
                    </td>
                </tr>
            )
        })}/>
        </div>
    )
}

export default Search;