// funcion que devuelve algo (componente en react)
// props es la propiedad del boton, en este caso es text

import Formulario from "./Formulario"

// componente principal de React
function App() {
  const title = "Esto es un título" //esto se llama entre corchetes
  const classTitle = "text-center" // y esto
  const srcImagen = "https://vitejs.dev/logo.svg"

  return (
    // no deja exportar mas de un  <div>, para ello usar <fragment></fragment> o <></> que es lo mismo
    <>
    <div className="container">
      <p className = "text-center"> {title}</p> 
      <p className = "text-center"> {title.toUpperCase()}</p> 
      <p className = {classTitle}> {title.toUpperCase()}</p> 
      <p className = {classTitle}> {1+1}</p> 
      < img src={srcImagen} alt={`scrImagen - ${title}`}/>
      <h1> Formulario no controlado </h1>
      <Formulario/>
      </div>
      

    </>
  )
}

export default App
