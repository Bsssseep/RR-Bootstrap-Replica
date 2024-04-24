import './App.css';
import TopBar from './components/TopBar';
import StoreListing from './components/StoreListing';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Location />
      <StoreListing />
    </div>
  );
}

export default App;