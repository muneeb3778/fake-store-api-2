import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './srcfakeproduct/Home'
import Singlepage from './srcfakeproduct/Singlepage'
import Categories from './srcfakeproduct/Categories'
import { Navbar } from './srcfakeproduct/Navbar'
import Cart from './srcfakeproduct/Cart'
import Error from './srcfakeproduct/Error'
import Form from './Form-Validation/Form'



function App() {


  return (
  <>
  <BrowserRouter>
<Routes>
<Route path='/' element={<Form/>}/>
<Route path='/home' element={<Home/>}/>,
<Route path='/home/categories/:ky' element={<Categories/>}/>,
<Route path='/home/:key' element={<Singlepage/>}/>,
<Route path='/cart' element={<Cart/>}/>,
<Route path='*' element={<Error/>}/>

</Routes>

</BrowserRouter>



  </>  


    
  )
}

export default App


