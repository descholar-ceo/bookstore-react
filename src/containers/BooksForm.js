const BooksForm = () => {
  // eslint-disable-next-line no-unused-vars
  const categoryCollection = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter the name of a book" />
        <select>
          <option value="">---Select the book category---</option>
        </select>
        <button type="button">Save book</button>
      </form>
    </div>
  );
};

export default BooksForm;
