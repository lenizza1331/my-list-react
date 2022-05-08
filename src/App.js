import './App.css';
import NewList from './components/NewList';


function App() {
    return (
    <div className="container">
        <div className="container__item">
            <h1>Happy person's planner</h1>
            <p>Isn't it a great day to try something new?</p>
        </div>
        <NewList/>
    </div>
    );
}

export default App;
