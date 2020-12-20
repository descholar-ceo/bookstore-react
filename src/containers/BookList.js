import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookAction } from '../redux/actions';

const BookList = ({ books, removeBook }) => {
  const handleRemoveBook = book => removeBook(book);
  const bookRows = books.map(book => (
    <Book
      key={`book-number-${book.bookId}`}
      book={book}
      deleteAction={() => handleRemoveBook(book)}
    />
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              Book ID
            </th>
            <th>
              Title
            </th>
            <th>
              Category
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bookRows}
        </tbody>
      </table>
    </div>
  );
};
BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBookAction(book)) });

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
