import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onEdit, onDelete }) {
  const [bookEdit, setBookEdit] = useState(false);

  const handleEditClick = () => {
    setBookEdit(!bookEdit);
  }

  const handleDeleteClick = () => {
    onDelete(book.id);
  }

  const handleSubmit = (id, newTitle) => {
    setBookEdit(false);
    onEdit(id, newTitle);
  }

  // let content = <h3>{ book.title }</h3>;
  // if(bookEdit) content = <BookEdit book={book} onEdit={onEdit} />

  return (
    <div className="book-show">
      <div>{ bookEdit ? <BookEdit book={book} onSubmit={handleSubmit} /> : book.title }</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow;