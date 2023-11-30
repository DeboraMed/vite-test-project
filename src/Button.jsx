import PropTypes from 'prop-types'
import { useState } from 'react'

// funcion que devuelve algo (componente en react)
// props es la propiedad del boton, en este caso es text
function MyButton({text}){

  // componente para que actulice el estado del boton
  // valor y modificador
  let [count,setCount] = useState(1)

  const handleClick = () => {
    console.log(`Has hecho click ${text}`)
    // pasarle que cambia el estado
    setCount (count+1)
  }  
  return(
    <button onClick={handleClick}>{text} - {count}</button>
  )
}

MyButton.propTypes = {
  text:PropTypes.string.isRequired,
  //edad:PropTypes.number.isRequired,
}

function Button(){
    
    return (
        // no deja exportar mas de un  <div>, para ello usar <fragment></fragment> o <></> que es lo mismo
    <>
        <MyButton text = "boton 1" edad = {20}/>
        <MyButton text = "boton 2" edad = {20}/>
        <MyButton text = "boton 3" count = {0}/> 
    </>
    //llamar al count para que se muestre en el boton
    )
}

export default Button