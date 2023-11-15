import logo from './logo.svg';
import './App.css';

import HOMEE from './pages/Homepage/HOMEE';
import Product from './pages/PRODUCTPAGE/Product';
import PRODUCTT from './pages/PRODUCTPAGE/PRODUCTT';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './pages/Aboutus/Aboutus';
import Contactus from './pages/Contact/Contactus';

function App() {
  return (
    <div className="App">


<BrowserRouter>
<Routes>
<Route index element={<HOMEE/>}/>
<Route path='/PRODUCT' element={<PRODUCTT/>} />
<Route path='/Aboutus' element={<Aboutus/>}/>
<Route path='/Contact' element={<Contactus/>}/>


</Routes>




</BrowserRouter>



    </div>
  );
}

export default App;
