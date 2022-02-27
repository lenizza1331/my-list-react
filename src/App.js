import './App.css';
import { MyList } from './MyList';


function App() {
  return (
      <div className="container">
          <div className="container__item">
              <h1>Happy person's planner</h1>
              <p>Isn't it a great day to try something new?</p>
          </div>

          <MyList />
      </div>
  );
}

export default App;
