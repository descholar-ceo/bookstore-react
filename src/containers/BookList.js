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
        <nav>
          <div>
            <h1>BookStore CMS</h1>
            <h3>Books</h3>
            <h3>Categories</h3>
            <CategoryFilter handleFilterChange={handleFilterChange} />
          </div>
          <div>
            <FaUser />
          </div>
        </nav>
      </div>
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
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBookAction(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
