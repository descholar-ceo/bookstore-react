const BooksForm = () => (
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

export default BooksForm;
