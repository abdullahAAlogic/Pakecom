import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./components/home/Home"
import ProductDetails from "./components/productDetails/ProductDetails"
import CategoryArchive from "./components/categoryArchive/CategoryArchive"


function App() {  
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<Home/>} ></Route>
          <Route path="/category/:id" element={<CategoryArchive/>} ></Route>
          <Route path="/product/:id" element={<ProductDetails/>} ></Route>
          <Route path="/account" element={<Home/>} ></Route>
          <Route path="/cart" element={<Home/>} ></Route>
          <Route path="/contact" element={<Home/>} ></Route>
          <Route path="*" element={<Home/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
