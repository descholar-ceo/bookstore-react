import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const BookList = ({ books }) => {
  const { bookId, bookTitle, bookCategory } = books;
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
          <tr>
            <td>{bookId}</td>
            <td>{bookTitle}</td>
            <td>{bookCategory}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, null)(BookList);
