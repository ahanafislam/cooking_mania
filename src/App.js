import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories/Categories';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
      </Routes>
    </div>
  );
}

export default App;