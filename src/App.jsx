import { useEffect, useState } from 'react'
import Clima from './componets/Clima';
import Error from './componets/Error';
import Formulario from './componets/Formulario'
import Header from './componets/Header'


function App() {


  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
});
const [consultar, guardarConsultar] = useState(false)
const [resultado, guardarResultado] = useState({})
const [error, guardarError] = useState(false)

const {ciudad,pais} = busqueda;

useEffect(()=>{
  const consultarApi = async() =>{

    if(consultar){
      
    const appId ='d9dd27b86a825eaba800543e64b4ffda';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    
    const respuesta =  await fetch(url);
     const resultado = await respuesta.json();
     
     guardarResultado(resultado);
     guardarConsultar(false);

     // detecta si hubo resultados correctos en la consulta

     if( resultado.cod === '404'){
      guardarError(true)
     }else{
      guardarError(false)
     }
 
    }


  }
  consultarApi()
},[consultar])

let componente;
if(error){
  componente = <Error mensaje='No hay resultados en la busqueda'/>
} else{
  componente =  <Clima
  resultado={resultado}
/>
}
  return (
   <>
      <Header
        titulo='Clima  React App'
      />
      <div className="contenedor-form">
          <div className="container text-center">
              <div className="row">
                <div className=" col-sm-12 col-md-6">
                  <Formulario
                    busqueda={busqueda}
                    guardarBusqueda={guardarBusqueda}
                    guardarConsultar={guardarConsultar}
                  />
                  
                </div>
                <div className="col-sm-12  col-md-6">
                  {componente}
                </div>
              </div>
          </div>
      </div>
   
   </>
  )
}

export default App
