import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/Shared/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/HomeSection/Home/Home';
import Items from './components/Pages/ItemsSection/Items/Items';
import Login from './components/Pages/LoginSection/Login/Login';
import Register from './components/Pages/LoginSection/Register/Register';
import { ToastContainer } from 'react-toastify';
import UpdateItem from './components/Pages/HomeSection/UpdateItem/UpdateItem';
import ItemDetails from './components/Pages/ItemsSection/ItemDetails/ItemDetails';
import AddItems from './components/Pages/AddItems/AddItems';
import 'react-toastify/dist/ReactToastify.css';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import RequiredAuth from './components/Pages/LoginSection/RequiredAuth/RequiredAuth';
import Blogs from './components/Pages/BlogsAll/Blogs/Blogs';
import MyItems from './components/Pages/MyItems/MyItems';
import Footer from './components/Shared/Footer/Footer';





function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/items' element={
          <Items></Items>
        }></Route>
        <Route path='/item/:itemId' element={
          <RequiredAuth><ItemDetails /></RequiredAuth>}></Route>
        <Route path='/updateItem' element={
          <RequiredAuth>
            <UpdateItem></UpdateItem>
          </RequiredAuth>
        }
        ></Route>
        <Route path="/addItems" element={
          <RequiredAuth>
            <AddItems></AddItems>
          </RequiredAuth>
        }></Route>
        <Route path="/manageInventory" element={
          <RequiredAuth>
            <ManageInventory></ManageInventory>
          </RequiredAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequiredAuth>
            <MyItems></MyItems>
          </RequiredAuth>
        }></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes >
      <Footer></Footer>
      <ToastContainer />
    </div >
  );
}

export default App;
