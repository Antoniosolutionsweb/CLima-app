import React from 'react'
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
  return (
    <>

      <div className=" bg-body-tertiary">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <span className="navbar-brand col-sm-12 h1 text-center titulo">{titulo}</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
Header.propTypes = {
  titulo: PropTypes.string.isRequired
}
export default Header
