import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarIcon from "./components/NavbarIcon";
import Home from "./view/Home";
import Cart from "./view/Cart";
import RequestDetail from "./view/RequestDetail";
import PizzaProvider from "./context/PizzaProvider";



function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
      <NavbarIcon/>
      <PizzaProvider>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="carrito" element={<Cart/>}/>
          <Route path="/pizza/:id" element={<RequestDetail/>} />
          </Routes>
          </PizzaProvider>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
