import PropTypes from 'prop-types';

const Book = ({ book, deleteAction }) => {
  const { bookTitle, bookCategory } = book;
  return (
    <tr className="display-grid">
      <td className="display-grid td-leftmost">
        <h2 className="book-category">{bookCategory}</h2>
        <h1 className="book-title">{bookTitle}</h1>
        <h3 className="blue-text author">Suzanne Collins</h3>
        <div>
          <button className="blue-text" type="submit">Comments</button>
          <p className="p-vertical">|</p>
          <button className="blue-text" onClick={deleteAction} type="button">Delete</button>
          <p className="p-vertical">|</p>
          <button className="blue-text" type="submit">Edit</button>
        </div>
      </td>
      <td>
        <div>Progress</div>
      </td>
      <td>
        <div>
          Current chapter
        </div>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string,
    bookTitle: PropTypes.string,
    bookCategory: PropTypes.string,
  }).isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default Book;
