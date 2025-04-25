import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import BlogCards from '../BlogCards/BlogCards';
import DashBoard from '../DashBoard/DashBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/Header' element={<Header/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/' element={<DashBoard/>} />
          <Route path='/BlogCards' element={<BlogCards/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
