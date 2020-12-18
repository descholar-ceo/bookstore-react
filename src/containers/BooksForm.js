import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import randomIdGenerator from '../helpers/randomId';
import { createBookAction } from '../redux/actions';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ bookTitle: '', bookCategory: '' });
  const handleChange = ({ target: { name, value } }) => setState({ [name]: value });
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
        />
        <select
          onChange={event => handleChange(event)}
          name="bookCategory"
        >
          <option value="default">---Select the book category---</option>
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