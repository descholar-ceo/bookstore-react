import { useState } from 'react';

const BooksForm = () => {
  const [state, setState] = useState({ bookTitle: 'default book', bookCategory: 'novel' });
  // eslint-disable-next-line no-unused-vars
  const categoryCollection = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <h2>Create a book</h2>
      <form>
        <input name="book-title" id="book-title" type="text" placeholder="Enter the title of a book" />
        <select name="book-category" id="book-category">
          <option value="default">---Select the book category---</option>
        </select>
        <button type="submit">Save book</button>
      </form>
    </div>
  );
};

export default BooksForm;
