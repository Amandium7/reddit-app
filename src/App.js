import logo from './logo.svg';
import './App.css';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { PostList } from './components/PostList';
import './assets/styles/style.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <SearchBar />
      <PostList />


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
