import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { createBookAction, removeBookAction } from '../redux/actions';

const BookList = ({ books }) => {
  const bookRows = books.map(book => (<Book key={`book-number-${book.bookId}`} book={book} />));
  return (
    <div>
      <table>
        <thead>
          <th>
            Book ID
          </th>
          <th>
            Title
          </th>
          <th>
            Category
          </th>
        </thead>
        <tbody>
          {bookRows}
        </tbody>
      </table>
    </div>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = state => ({ books: state.books });
const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBookAction(book)),
  removeBook: book => dispatch(removeBookAction(book)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
