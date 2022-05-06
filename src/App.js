import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/Shared/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Home from './components/Pages/HomeSection/Home/Home';
import Items from './components/Pages/ItemsSection/Items/Items';





function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/items' element={<Items></Items>}></Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
