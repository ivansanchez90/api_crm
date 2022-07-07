import {useState, useEffect} from 'react'

const Inicio = () => {

  const [clientes, setClientes] = useState([])


  useEffect(() => {
    const obtenerClientesApi = async () => {
      try {
        const url = 'http://localhost:4000/clientes'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    }
    obtenerClientesApi()
  }, [])
  

  return (
    <div>
        <h1>Inicio.jsx</h1>
    </div>
  )
}

export default Inicio