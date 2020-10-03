import React from 'react'
import BookResultRow from '../BookResultRow/BookResultRow'

function BookResultTable() {
    return (
        <table className="container-fluid">
            <tbody>
                {/* <tr className="table-headings">
                    <th>Book Search Results</th>
                    <th>Description</th>
                </tr> */}
                    <BookResultRow />
            </tbody>
        </table>
    )
}

export default BookResultTable;