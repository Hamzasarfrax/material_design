
import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle'
import "../src/Style/Responsive.css";
import "../src/Style/Main_Style.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Routes/Main';
import Sec from './Routes/Sec';
import First from './Routes/First';
import Footer from './Footer/Footer';
import  Header  from '../src/Header/Header';
import Home from './Routes/Home';

function App() {
  return (
  <>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='first' element={<First/>}/>
<Route path='second' element={<Sec/>}/>

</Routes>
<Footer/>
</BrowserRouter>
  </>
  );
}

export default App;
