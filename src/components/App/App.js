import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import BlogCards from '../BlogsOuterCards/BlogOuterCards';
import DashBoard from '../DashBoard/DashBoard';
import Register from '../Register/Register';
import Home from '../Home/Home';
import BlogDisplay from '../BlogDisplay/BlogDisplay';
import BlogUpload from '../BlogUpload/BlogUpload';
import BlogOuterCards from '../BlogsOuterCards/BlogOuterCards';
import HomePageredirect from '../HomePageredirect/HomePageredirect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditBlog from '../EditBlog/EditBlog';

function App() {
  return (
    <div style={{userSelect: "none"}}>
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePageredirect/>} />
          <Route path='/EditBlog/:BlogId' element={<EditBlog/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Dashboard' element={<DashBoard/>} />
          <Route path='/BlogOuterCards' element={<BlogOuterCards/>} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/BlogUpload' element={<BlogUpload/>} />
          <Route path='/BlogDisplay/:id' element={<BlogDisplay/>} />
          <Route path='/BlogCards' element={<BlogCards/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
