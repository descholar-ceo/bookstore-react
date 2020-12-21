import PropTypes from 'prop-types';

const Book = ({ book, deleteAction }) => {
  const { bookTitle, bookCategory } = book;
  return (
    <tr>
      <td>
        <h2>{bookCategory}</h2>
        <h1>{bookTitle}</h1>
        <span>Author</span>
        <div>
          <button type="submit">Comments</button>
          {' '}
          |
          <button onClick={deleteAction} type="button">Delete</button>
          {' '}
          |
          <button type="submit">Edit</button>
        </div>
      </td>
      <td>
        <div>Progress</div>
      </td>
      <td>
        <div>
          Current chapter
        </div>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.string,
    bookTitle: PropTypes.string,
    bookCategory: PropTypes.string,
  }).isRequired,
  deleteAction: PropTypes.func.isRequired,
};

export default Book;
