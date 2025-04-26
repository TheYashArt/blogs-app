import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import BlogCards from '../BlogsOuterCards/BlogOuterCards';
import DashBoard from '../DashBoard/DashBoard';
import Register from '../Register/Register';
import Home from '../Home/Home';
import BlogOuterCards from '../BlogsOuterCards/BlogOuterCards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{userSelect: "none"}}>
      <Router>
      <Header/>
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/' element={<DashBoard/>} />
          <Route path='/BlogOuterCards' element={<BlogOuterCards/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Home' element={<Home/>} />

          <Route path='/BlogCards' element={<BlogCards/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
