import categoriesOptions from '../helpers/categoriesList';

const CategoryFilter = () => (
  <select name="category">
    <option value="">---Select category---</option>
    {categoriesOptions}
  </select>
);

export default CategoryFilter;
