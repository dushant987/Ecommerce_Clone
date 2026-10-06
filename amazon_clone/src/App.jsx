import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar"
import Home from "../pages/Home"
import AllDeals from "../pages/AllDeals"
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Orders from "../pages/Orders"
import { CartProvider } from "./context/CartContext"
import { AuthProvider } from "./context/AuthContext"
import { OrderProvider } from "./context/OrderContext"

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <OrderProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/deals" element={<AllDeals />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </OrderProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
export default App

