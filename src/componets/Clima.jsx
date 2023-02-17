import React from 'react'
import PropTypes from 'prop-types';

const Clima = ({resultado}) => {

     // extraer los valores
     const { name, main } = resultado;

     if(!name) return null;
     // esta en grados kelvin
     const kelvin = 273.15;
  return (
    <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">El clima de {name} es:</h5>
                <h6 className="card-subtitle mb-2 text-muted temperatura">{parseFloat(main.temp - kelvin, 10 ).toFixed(2)}<span>&#x2103;</span></h6>
                <h5 className="card-title">Temperaruta maxima es: 
                { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) }
                    <span>&#x2103;</span>
                </h5>
                <h5 className="card-title">Temperaruta minima es:
                { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) }
                    <span>&#x2103;</span>
                </h5>
                
            </div>
        </div>
    </>
  )
}

Clima.prototype ={
    resultado: PropTypes.object.isRequired
}


export default Clima
