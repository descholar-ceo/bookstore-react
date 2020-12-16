import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { bookId, bookTitle, bookCategory } = book;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
    </tr>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  book: PropTypes.object.isRequired,
};

export default Book;
