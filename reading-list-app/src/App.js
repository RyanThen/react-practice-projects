import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { 
        id: Math.round(Math.random() * 99999),
        title 
      },
    ]
    setBooks(updatedBooks);
  }

  return (
    <div className="app">
      <BookList books={books} />
      <BookCreate onSubmit={createBook} />
    </div>
  )
}

export default App;