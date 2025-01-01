import "./style.css"

export default function About() {
  return (
    <div className="containerAbout">
      <div className="about-left">
        <div className="text-xl poppins-medium">Sobre nós</div>
        <div className="text-sm poppins-light">
          Somos uma pequena equipe sem fins lucrativos que visa o bem estar dos
          animais. Nosso objetivo é conseguir reduzir o número de animais que
          vivem nas ruas, alimentá-los, vaciná-los e mentê-los seguros. Nos
          consideramos pais adotivos temporários de todos os animais pois
          gostamos o suficiênte para dar todo apoio que necessitam.
        </div>
      </div>
      <div className="about-right">
        <img
          src="https://media.istockphoto.com/id/1348512805/pt/foto/mother-and-son-playing-with-a-cat-at-home.jpg?s=612x612&w=0&k=20&c=gwon_lmUjl5nwYBp8Dec1Lko-WZEUn6J1_wkwEHs6Tc="
          alt=""
        />
      </div>
    </div>
  )
}
