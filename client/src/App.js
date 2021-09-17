import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"
import AuthorList from './components/AuthorList';
import AddNew from './components/AddNew';
import Edit from './components/Edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite authors</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <div className="App">
          <p><Link to="/new" >Add Author</Link></p>
            <AuthorList></AuthorList>
          </div>
        </Route>
        <Route exact path="/new">
          <AddNew></AddNew>
        </Route>
        <Route exact path="/edit/:id">
          <Edit></Edit>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
