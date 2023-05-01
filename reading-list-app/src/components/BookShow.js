import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {
  const [bookEdit, setBookEdit] = useState(false);

  const handleEditClick = () => {
    setBookEdit(!bookEdit);
  }

  const handleDeleteClick = () => {
    onDelete(book.id);
  }

  let content = <h3>{ book.title }</h3>;
  if(bookEdit) content = <BookEdit />

  return (
    <div className="book-show">
      <div>{ content }</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow;