import React from 'react'
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
  return (
    <div>
              <p className='alert alert-danger '>{mensaje}</p> 

    </div>
  )
}


Error.prototype ={
  resultado: PropTypes.string.isRequired
}

export default Error
