import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import randomIdGenerator from '../helpers/randomId';
import { createBookAction } from '../redux/actions';
import categoriesOptions from '../helpers/categoriesList';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ bookTitle: '', bookCategory: '' });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };
  const { bookTitle, bookCategory } = state;
  const handleSubmit = event => {
    event.preventDefault();
    createBook({
      bookId: randomIdGenerator(),
      bookTitle,
      bookCategory,
    });
    setState({ bookTitle: '', bookCategory: '' });
  };

  return (
    <div>
      <h2 className="new-book-head">Add a new book</h2>
      <form className="display-grid" onSubmit={event => handleSubmit(event)}>
        <input
          onChange={event => handleChange(event)}
          name="bookTitle"
          type="text"
          placeholder="Book title"
          value={state.bookTitle}
          required
        />
        <select
          onChange={event => handleChange(event)}
          name="bookCategory"
          value={state.bookCategory}
          required
        >
          <option value="default">---Category---</option>
          {categoriesOptions}
        </select>
        <button className="primary-btn" type="submit">Add book</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBookAction(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
