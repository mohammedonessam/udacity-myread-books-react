import React from 'react'
import PropTypes from 'prop-types'
import * as API from '../BooksAPI'
import "../App.css";

const ShelfChange = ({value = 'none', bookId}) => {
    function handlerChangeSelect(e){
        API.update({id:bookId}, e.target.value).then(() => window.location.reload())
    }
    return <div className="shelf-changer">
        <select value={value} onChange={handlerChangeSelect}>
            <option value="none" disabled>Move To...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want To Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
        </select>
    </div>
}
ShelfChange.propTypes = {
    value: PropTypes.string
}
export default ShelfChange