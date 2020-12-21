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
          <button className="blue-text" onClick={deleteAction} type="button">Remove</button>
          <p className="p-vertical">|</p>
          <button className="blue-text" type="submit">Edit</button>
        </div>
      </td>
      <td className="display-grid centered-content td-middle">
        <div className="percent-circle percent-circle-64" />
        <div className="display-grid">
          <h1 className="percent-number">64%</h1>
          <h2 className="completed-text">Completed</h2>
        </div>
      </td>
      <td className="display-grid td-rightmost">
        <h2 className="current-chapter-container">Current Chapter</h2>
        <h3>Chapter 17</h3>
        <button type="button">Update Progress</button>
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
