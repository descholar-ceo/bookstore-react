import { connect } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBookAction } from '../redux/actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = book => removeBook(book);
  const handleFilterChange = event => changeFilter(event.target.value);
  const booksToDisplay = filter === 'All' ? books : books.filter(book => book.bookCategory === filter);
  const bookRows = booksToDisplay.map(book => (
    <Book
      key={`book-number-${book.bookId}`}
      book={book}
      deleteAction={() => handleRemoveBook(book)}
    />
  ));
  return (
    <div>
      <div>
        <div className="nav display-grid">
          <div className="nav-left display-flex centered-content">
            <h1 className="blue-text">BookStore CMS</h1>
            <h4>Books</h4>
            <h4>Categories</h4>
            <CategoryFilter handleFilterChange={handleFilterChange} />
          </div>
          <div className="display-grid centered-content nav-user-container">
            <FaUser className="blue-text" />
          </div>
        </div>
      </div>
      <table>
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
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBookAction(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
