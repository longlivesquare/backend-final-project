import { Switch, Route} from 'react-router-dom';
import './App.css';
import BoardgameList from './Boardgames/BoardgameList';
import CategoryProvider from './Providers/CategoryProvider';

function App() {
  return (
    <CategoryProvider>
      <Switch>
        <Route path='/' exact component={BoardgameList}></Route>
      </Switch>
    </CategoryProvider>
  );
}

export default App;
