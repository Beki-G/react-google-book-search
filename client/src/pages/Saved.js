import React, { useEffect, useState } from 'react';
import Nav from '../components/NavBar/NavBar';
import SearchHeader from '../components/SearchHeader/SearchHeader';
import SearchResults from '../components/SearchResults/SearchReasults';
import API from '../utils/API';

function Saved(){
    const [books, setBooks] = useState([])

    useEffect(()=>{
        loadBooks();
    }, [])

    async function loadBooks(){
        const userBooks = await API.findUserBooks()
        // console.log("userBooks is: ", userBooks.data)
        setBooks(userBooks.data)
    }

    async function removeBook(event){
        const bookId = event.target.id;
        await API.removeBook(bookId);

        loadBooks();
    }


    return(
        <div>
            <Nav />
            <SearchHeader />
            <SearchResults data={books.map((book, index)=>{
                return (
                    <tr key={index} className="mb-3">
                        <td className="imgColumn">
                            <div>
                                <strong>Title: </strong>{book.title}<br />
                                <strong>Authors: </strong>{book.authors.join(", ")}
                            </div>
                            <img alt={`Cover Art of ${book.title}`} src={book.image||"https://via.placeholder.com/150/000000/FFFFFF/?text=Cover+Not+Available"} />
                        </td>
                        <td>
                            <strong>Description: </strong>{book.description}
                            <br /><br />
                            <button><a href= {book.link} target="_blank" rel="noopener noreferrer">View</a></button>
                            <button id={book._id} onClick={removeBook}>Delete</button>
                        </td>
                    </tr>
                )
            })} />
        </div>
    )
}

export default Saved;