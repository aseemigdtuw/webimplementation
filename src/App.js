import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import SignIn from './pages/signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
     <Navbar/>
       <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home/>}></Route> */}
          <Route path="/about" element={<About/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
