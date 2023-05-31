import Home from "./components/Home"
import Header from "./components/Header"
import Pizzas from "./components/Pizzas"
import Pizza from "./components/Pizza"
import { Route, Routes } from "react-router-dom"
import Cart from "./components/Cart"

const App = () => {
  return (
    <>
    <Header></Header>
    <Routes>
    <Route element={<Pizza/>} path="/Pizza" />
    <Route element={<Home/>} path="/" />
    <Route element={<Pizzas/>} path="/Pizzas" />
    <Route element={<Cart />} path="/Cart" />
    <Route element={<Pizza/>} path="/Pizzas/:pizza" />
    </Routes>
    </>
  )
}

export default App