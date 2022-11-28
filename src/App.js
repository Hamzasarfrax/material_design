
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Routes/Main';

function App() {
  return (
  <>
<BrowserRouter>
<Routes>
<Route path='/' element={<Main/>}>
</Route>
</Routes>

</BrowserRouter>
  </>
  );
}

export default App;
