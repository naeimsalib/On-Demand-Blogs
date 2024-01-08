import './App.css';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new Blog'
  const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} Times</p>
      </div>
    </div>
  );
}

export default App;
