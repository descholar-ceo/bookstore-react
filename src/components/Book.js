import PropTypes from 'prop-types';

const Book = ({ book, deleteAction }) => {
  const { bookId, bookTitle, bookCategory } = book;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td><button onClick={deleteAction} type="button">Delete</button></td>
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
