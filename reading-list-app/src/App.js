import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = function(bookID) {
    const updatedBooks = books.filter((book) => {
      return book.id !== bookID;
    });
    setBooks(updatedBooks);
  }

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { 
        id: Math.round(Math.random() * 99999),
        title 
      },
    ];
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onSubmit={createBook} />
    </div>
  )
}

export default App;