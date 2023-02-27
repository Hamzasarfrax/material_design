
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
import "../src/Style/Responsive.css";
import "../src/Style/Main_Style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Routes/Main';
import Sec from './Routes/Sec';

import Footer from './Footer/Footer';
import  Header  from '../src/Header/Header';
import Home from './Routes/Home';
import Hire_Me from './Routes/Hire_Me';
import Card_detail from './Routes/Card_detail';
import Hire_staff from './Routes/Hire_staff';

function App() {
  return (
  <>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='hireme' element={<Hire_Me/>}/>
<Route path='card' element={<Card_detail/>}/>
<Route path='hirestaff' element={<Hire_staff/>}/>
<Route path='second' element={<Sec/>}/>

</Routes>
<Footer/>
</BrowserRouter>
  </>
  );
}

export default App;
