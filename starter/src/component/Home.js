import React from "react";
import Shelf from './Shelf'
import {
  Link
} from "react-router-dom";
import * as API from '../BooksAPI'
import "../App.css";

class HomePage extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount(){
    API.getAll().then(books => {
      let currentlyReading = []
      let wantToRead = []
      let read = []
      books.forEach(book => {
        if(book.shelf === "currentlyReading"){
          currentlyReading.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
        if(book.shelf === "wantToRead"){
          wantToRead.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
        if(book.shelf === "read"){
          read.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks && book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
      })
      this.setState({currentlyReading, wantToRead, read})
    })
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="list-books-title">My Reads</h1>
        <div className="container home">
          <Shelf title="Currently Reading" books={this.state.currentlyReading} />
          <Shelf title="Want To Read" books={this.state.wantToRead} />
          <Shelf title="Read" books={this.state.read} />
          <Link to="/search" className="search-link">+</Link>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;