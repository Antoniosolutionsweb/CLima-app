import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

  // state del formulario
   

    const [error, guardarError] = useState(false)
// extraer el pais y la ciudad
    const {ciudad,pais} = busqueda;



// funcion para colocar los elementos en el state

const handleChange = e =>{
    // actualizar el state 
    guardarBusqueda({
        ...busqueda,
        [e.target.name]: e.target.value
    });
}

const handleSubmit = e =>{
  e.preventDefault();


  // vamos a validar el form 

  if(ciudad.trim() === '' || pais.trim() === '' ){
    guardarError(true)
    return;
}
guardarError(false)


  // pasarlo al componente pricipal
  guardarConsultar(true)

}
  return (
    <>
      <form onSubmit={handleSubmit}>
       
      
      <div className="col-md-8 col-sm-12 padd">
      {error ? <Error mensaje='Los  campos son obligatorios'/>: null}


        
        <input 
            type="text"
            className="form-control tex-color"
            id="ciudad" 
            placeholder="Ciudad "
            name='ciudad'
            value={ciudad}
            onChange={handleChange}
          
        />
      </div>
        <div className="col-md-8 col-sm-12 padd">
            
            <select 
              name="pais"
              id="pais"
              value={pais}
              onChange={handleChange}
            className="form-select"
            
            >
             <option value="">-- Seleccione un país --</option>
                    <option value="VE">Venezuela</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
            </select>
        </div>
        <div className='col-md-8 col-sm-12 padd'>
            <input 
              type="submit" 
              className="btn  btn-primary col-sm-12"
              value='Buscar'
            />
        </div>
      </form>
    </>
  )
}

Formulario.propTypes = {
  busqueda : PropTypes.object.isRequired,
  guardarBusqueda : PropTypes.func.isRequired,
  guardarConsultar : PropTypes.func.isRequired,
}



export default Formulario
