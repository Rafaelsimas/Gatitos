import "./style.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(0)

  function handleClickOpen() {
    setOpenMenu(openMenu + 1)
  }

  function handleClickClose() {
    setOpenMenu(openMenu - 1)
  }

  return (
    <>
      <header className="menu-mobile">
        <nav>
          <div className="title-top poppins-bold">Gatitos</div>
          <ion-icon onClick={handleClickOpen} name="menu-outline"></ion-icon>
          <ul className="link-desktop">
            <Link to="/">
              <li className="link poppins-regular">Home</li>
            </Link>

            <Link to="/sobre">
              <li className="link poppins-regular">Sobre nós</li>
            </Link>
            <li className="link poppins-regular">Adote</li>
            <li className="link poppins-regular active">Login</li>
          </ul>
        </nav>
      </header>
      <ul className={openMenu > 0 ? "drawer" : "drawer displayHidden"}>
        <Link to="/" onClick={handleClickClose}>
          <li>Home</li>
        </Link>

        <Link to="/sobre" onClick={handleClickClose}>
          <li>Sobre</li>
        </Link>
        <li>Adote</li>
        <li>Login</li>
        <ion-icon
          className="btn-close"
          onClick={handleClickClose}
          name="close-circle-outline"
        ></ion-icon>
      </ul>
    </>
  )
}
