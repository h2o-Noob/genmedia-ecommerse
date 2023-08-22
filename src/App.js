import './App.css';
import { Fragment } from 'react';
import Home from './components/Home';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </Router>
    </Fragment>

  );
}

export default App;
