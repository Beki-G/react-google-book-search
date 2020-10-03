import React from 'react'
import './styles.css'
// import BookResultRow from '../BookResultRow/BookResultRow'

function BookResultTable({data}) {
    console.log("data in resultTable is: ", data)
    return (
        <table className="container-fluid">
            <tbody>
                {data}
            </tbody>
        </table>
    )
}

export default BookResultTable;