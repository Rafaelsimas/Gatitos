import { BrowserRouter, Routes, Route } from "react-router-dom"
import BannerHome from "./Components/BannerHome/BannerHome"
import About from "./Components/About/About"
import Login from "./Components/Login/Login"
import Galery from "./Components/Galery/Galery"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<BannerHome />} />
          <Route path="/sobre" exact element={<About />} />
          <Route path="/entrar" exact element={<Login />} />
          <Route path="/galeria" exact element={<Galery />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
