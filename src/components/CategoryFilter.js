import PropTypes from 'prop-types';
import categoriesOptions from '../helpers/categoriesList';

const CategoryFilter = ({ handleFilterChange }) => (
  <div>
    <span>Filter books by: </span>
    <select onChange={handleFilterChange}>
      <option value="all">All</option>
      {categoriesOptions}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
