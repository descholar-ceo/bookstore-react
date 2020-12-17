const BooksForm = () => {
  // eslint-disable-next-line no-unused-vars
  const categoryCollection = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <input name="book-title" id="book-title" type="text" placeholder="Enter the title of a book" />
        <select name="book-categoy" id="book-category">
          <option value="">---Select the book category---</option>
        </select>
        <button type="button">Save book</button>
      </form>
    </div>
  );
};

export default BooksForm;
