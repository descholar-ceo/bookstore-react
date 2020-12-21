import BookList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="app">
    <BookList />
    <hr />
    <BooksForm />
  </div>
);

export default App;
