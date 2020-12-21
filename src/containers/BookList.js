import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { changeFilter, removeBookAction } from '../redux/actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, removeBook, changeFilter }) => {
  const handleRemoveBook = book => removeBook(book);
  const handleFilterChange = event => changeFilter(event.target.value);
  const bookRows = books.map(book => (
    <Book
      key={`book-number-${book.bookId}`}
      book={book}
      deleteAction={() => handleRemoveBook(book)}
    />
  ));
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBookAction(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
