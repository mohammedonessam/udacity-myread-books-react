import React from 'react'
import PropTypes from 'prop-types'
import ShelfChange from './ShelfChange'
import "../App.css";



const Card = ({ image, title, authors, shelf, id }) => {
    return <div className="card">
        <img src={image.src} alt={image.alt} />
        <p>{title}</p>
        <ul>
            {authors.map(function (author, index) {
                return <li key={index}>{author}</li>
            })}
        </ul>
        <p><ShelfChange value={shelf} bookId={id}/></p>
    </div>
}
Card.propTypes = {
    image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }).isRequired,
    id: PropTypes.string.isRequired
}

export default Card