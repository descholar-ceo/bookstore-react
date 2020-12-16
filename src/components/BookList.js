import { connect } from 'react-redux';

const BookList = () => (
  <div>
    <table>
      <thead>
        <th>
          Book ID
        </th>
        <th>
          Title
        </th>
        <th>
          Category
        </th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sample book</td>
          <td>Tech books</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps, null)(BookList);
