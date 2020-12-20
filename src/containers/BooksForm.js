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
  const handleSubmit = event => {
    event.preventDefault();
    createBook({
      bookId: randomIdGenerator(),
      bookTitle: state.bookTitle,
      bookCategory: state.bookCategory,
    });
    setState({ bookTitle: '', bookCategory: '' });
  };

  return (
    <div>
      <h2>Create a book</h2>
      <form onSubmit={event => handleSubmit(event)}>
        <input
          onChange={event => handleChange(event)}
          name="bookTitle"
          type="text"
          placeholder="Enter the title of a book"
          value={state.bookTitle}
          required
        />
        <select
          onChange={event => handleChange(event)}
          name="bookCategory"
          value={state.bookCategory}
          required
        >
          <option value="default">---Select the book category---</option>
          {categoriesOptions}
        </select>
        <button type="submit">Save book</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBookAction(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
