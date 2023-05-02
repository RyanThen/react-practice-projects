import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handleChange = (e) => {
    setTitle(e.target.value);
  } 

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label className="label">Title</label>
      <input onChange={handleChange} value={title} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  )
}

export default BookEdit;