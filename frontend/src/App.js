import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>wellecome to React project</h1>
        <button className='user-name' onClick={ () => navigate('/Users') } >Users</button>
      </header>
    </div>
  );
}

export default App;
