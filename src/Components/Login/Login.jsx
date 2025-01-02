import "./style.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Galery from "../Galery/Galery"
import Menu from "../Menu/Menu"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const [error, setError] = useState("")
  const [user, setUser] = useState(null)
  const [imageData, setImageData] = useState([])

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(email, password)

    try {
      const request = await axios.post(
        "http://localhost:4001/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      setUser(request.data)
      getDataAnimals()
    } catch (error) {
      if (!error.response) {
        setError("Erro ao acessar o servidor")
      } else if (error.response.status == 401) {
        setError("Credenciais inválidas")
      }
    }
  }

  function getDataAnimals() {
    const request = axios.get("http://localhost:4001/images")
    request.then((response) => {
      setImageData(response.data)
    })
  }
  return (
    <>
      {user == null ? (
        <>
          <Menu />
          <form>
            <div className="containerLogin">
              <div className="text-top poppins-medium">
                Seus dados de acesso
              </div>
              <input
                type="text"
                placeholder="login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
              />
              <button onClick={(e) => handleLogin(e)}>Entrar</button>
              {error}
            </div>
          </form>
        </>
      ) : (
        <>
          <div className="logado">
            <h2>Olá {user.name}</h2>
            <img src={user.urlImage} alt="" />
          </div>
          <Galery imageData={imageData} />
        </>
      )}
    </>
  )
}
