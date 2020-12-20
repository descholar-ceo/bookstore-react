import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBookAction } from '../redux/actions';

const Book = ({ book, removeBook }) => {
  const handleRemoveBook = book => removeBook(book);
  const { bookId, bookTitle, bookCategory } = book;
  return (
    <tr>
      <td>{bookId}</td>
      <td>{bookTitle}</td>
      <td>{bookCategory}</td>
      <td><button onClick={() => handleRemoveBook(book)} type="button">Delete</button></td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    bookTitle: PropTypes.string.isRequired,
    bookCategory: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBookAction(book)) });

export default connect(null, mapDispatchToProps)(Book);
