import AboutSection from "./components/about"
import Achievements from "./components/achievement"
import CheckoutPage from "./components/checkout"

import ProductPage from "./components/product"
import Homepage from "./pages/homepage"
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {


  return (
   <>
   <BrowserRouter>
   <Routes>
    
    <Route path='/' element={<Homepage/>}/>
    <Route path="/about" element={<AboutSection/>}/>
    <Route path="/products" element={<ProductPage/>}/>
    <Route path="/checkout" element={<CheckoutPage/>}/>
    <Route path="/achievements" element={<Achievements/>}/>
   </Routes>
   </BrowserRouter>
   
   </>
  )
}

export default App
