import { useState } from 'react';
import { connect } from 'react-redux';
import { createBookAction } from '../redux/actions';

const BooksForm = props => {
  const [state, setState] = useState({ bookTitle: 'default book', bookCategory: 'novel' });
  const handleChange = ({ target: { name, value } }) => setState({ [name]: value });
  const handleSubmit = event => {
    event.preventDefault();
    console.log('The state is : ', state);
    console.log('The props are : ', props);
  };
  // eslint-disable-next-line no-unused-vars
  const categoryCollection = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <h2>Create a book</h2>
      <form onSubmit={event => handleSubmit(event)}>
        <input onChange={event => handleChange(event)} name="bookTitle" type="text" placeholder="Enter the title of a book" />
        <select onChange={event => handleChange(event)} name="bookCategory">
          <option value="default">---Select the book category---</option>
        </select>
        <button type="submit">Save book</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBookAction(book)) });

export default connect(null, mapDispatchToProps)(BooksForm);
