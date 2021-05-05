import './App.css';
import BoardgameList from './Boardgames/BoardgameList';
import CategoryProvider from './Providers/CategoryProvider';

function App() {
  return (
    <CategoryProvider>
      <BoardgameList />
    </CategoryProvider>
  );
}

export default App;
