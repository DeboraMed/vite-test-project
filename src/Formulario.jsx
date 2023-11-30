import { useRef } from "react"
import { useState } from "react"

const FormNoControlado = () => {

    const formulario = useRef(null)
    // componente para que actulice el estado del boton
    // valor y modificador
    let [mensaje,setMensaje] = useState()

    const handleSubmit = e => {
        e.preventDefault()
        console.log(formulario.current) // imprime todo el formulario

        let data = new FormData(formulario.current)
        console.log(...data.entries()) //convierte en objetos tanto la clave como el valor

        const objetoDatos = Object.fromEntries([...data.entries()])
        console.log(objetoDatos)

        const {Nombre, Descripcion, Estado} = objetoDatos
        if (!Nombre.trim() || !Descripcion.trim() || !Estado.trim()){
            setMensaje("Error, campos incompletos. ")
            return
        }
        setMensaje("Datos enviados")
    }

    return(
        <>
        <form onSubmit={handleSubmit} ref={formulario}>
            <input name="Nombre" placeholder="Nombre tarea" type="text" className="form-control mb-2"/>
            <textarea name="Descripcion" placeholder="Descripcion tarea"  className="form-control mb-2"/>
            <select name="Estado"  className="form-control mb-2" defaultValue="Pendiente">
                <option value="Pendiente">Pendiente</option>
                <option value="Completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
        <p>{mensaje}</p>
        </>
    )
}

export default FormNoControlado