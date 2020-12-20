const categoryCollection = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const categoriesOptions = categoryCollection.map((currOption, index) => (
  <option key={`option-number${index + 1}`} value={currOption}>{currOption}</option>
));

export default categoriesOptions;
