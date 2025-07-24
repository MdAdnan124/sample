import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './home';
import Create from './create';
import Update from './update';
import Read from './read';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='update/:id' element={<Update/>}></Route>
      <Route path='Read/:id' element={<Read/>}></Route>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
