import "./style.css"
import logoHome from "../../appImages/banner-hero.png"
export default function BannerHome() {
  return (
    <div className="container">
      <div className="left">
        <div className="text-md poppins-medium">Adote um animal</div>
        <div className="text-xl poppins-extrabold">
          Ajude animais de rua a encontrarem um lar
        </div>
        <div className="text-sm poppins-extralight">
          Todos os dias cães e gatos são abandonados por seus donos ou já nascem
          sem um lar. Seja um anjo e ajude essas pequenas fofuras a encontrarem
          um lar quentinho e com muito amor.
        </div>
        <div className="box-action-btn">
          <button className="btn-adoption">Adote</button>
          <button className="btn-more">Sobre nós</button>
        </div>
      </div>

      <div className="right">
        <img src={logoHome} alt="" />
      </div>
    </div>
  )
}
