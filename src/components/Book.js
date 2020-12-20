import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { bookId, bookTitle, bookCategory } = book;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td><button type="button">Delete</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.objectOf.isRequired,
};

export default Book;
