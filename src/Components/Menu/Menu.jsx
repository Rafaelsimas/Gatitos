import { useState } from "react"
import "./style.css"

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
            <li className="link poppins-regular">Home</li>
            <li className="link poppins-regular">Sobre nós</li>
            <li className="link poppins-regular">Adote</li>
            <li className="link poppins-regular active">Login</li>
          </ul>
        </nav>
      </header>
      <ul className={openMenu > 0 ? "drawer" : "drawer displayHidden"}>
        <li>Home</li>
        <li>Sobre nós</li>
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
