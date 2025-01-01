import { BrowserRouter, Routes, Route } from "react-router-dom"
import Menu from "./Components/Menu/Menu"
import BannerHome from "./Components/BannerHome/BannerHome"
import About from "./Components/About/About"
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" exact element={<BannerHome />} />
          <Route path="/sobre" exact element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
