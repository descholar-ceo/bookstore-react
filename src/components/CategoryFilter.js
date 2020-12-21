import categoriesOptions from '../helpers/categoriesList';

const CategoryFilter = () => (
  <div>
    <span>Filter books by: </span>
    <select name="category">
      <option value="all">All</option>
      {categoriesOptions}
    </select>
  </div>
);

export default CategoryFilter;
