import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { createBookAction, removeBookAction } from '../actions';

const BookList = ({ books }) => {
  console.log(books);
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
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ books: state.bookReducer });
const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBookAction(book)),
  removeBook: bookId => dispatch(removeBookAction(bookId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
