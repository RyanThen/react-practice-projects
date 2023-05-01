import { useState } from 'react';

function BookCreate({ onSubmit }) {
  let [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle('');
  }

  return (
    <div className='book-create'>
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>&nbsp;
        <input value={title} onChange={handleChange} className="input" />
        <button className="button">Create!</button>
      </form>
    </div>
  )
}

export default BookCreate;