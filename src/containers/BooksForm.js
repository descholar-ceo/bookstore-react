import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import randomIdGenerator from '../helpers/randomId';
import { createBookAction } from '../redux/actions';
import categoriesOptions from '../helpers/categoriesList';

const BooksForm = ({ createBook }) => {
  const [bookTitle, setBookTitle] = useState({ bookTitle: '' });
  const [bookCategory, setBookCategory] = useState({ bookCategory: '' });
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'bookTitle') setBookTitle(value);
    if (name === 'bookCategory') setBookCategory(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    createBook({
      bookId: randomIdGenerator(),
      bookTitle,
      bookCategory,
    });
    setBookTitle({ bookTitle: '' });
    setBookCategory({ bookCategory: '' });
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
        />
        <select
          onChange={event => handleChange(event)}
          name="bookCategory"
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
