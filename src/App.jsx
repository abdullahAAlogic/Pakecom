import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./components/home/Home"


function App() {  
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<Home/>} ></Route>
          <Route path="/category/:id" element={<Home/>} ></Route>
          <Route path="/product/:id" element={<Home/>} ></Route>
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
