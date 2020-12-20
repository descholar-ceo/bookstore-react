import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ books }) => {
  const bookRows = books.map(book => (<Book key={`book-number-${book.bookId}`} book={book} />));
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
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, null)(BookList);
