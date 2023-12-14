import Header from './Header';
import Main from './Main';
import Product from './Product';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Electronics from './Electronics';
import Clothing from './Clothing';
import Books from './Books';
import {Toaster} from 'react-hot-toast'
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Beauty from './Beauty';
import HomeDecor from './HomeDecor';
import Cart from './Cart';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Main/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/products/electronics' element={<Electronics/>}/>
        <Route path='/products/clothes' element={<Clothing/>}/>
        <Route path='/products/books' element={<Books/>}/>
        <Route path='/products/beauty' element={<Beauty/>}/>
        <Route path='/products/homedecor' element={<HomeDecor/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Toaster/>
      </BrowserRouter>
    </div>
  );
}

export default App;
