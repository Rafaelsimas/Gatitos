import "./style.css"
export default function Galery(props) {
  const { imageData } = props

  return (
    <>
      <div className="ulImage">
        {imageData.map((data) => (
          <li key={data.id}>
            <img className="urlImage" src={data.urlImage} alt="" />
            <div className="name poppins-semibold">{data.name}</div>
          </li>
        ))}
      </div>
    </>
  )
}
