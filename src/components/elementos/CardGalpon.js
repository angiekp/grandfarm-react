import React from "react";
import LogoLight from '../elementos/LogoLight'

const CardGalpon = () => { 
  return (
    <>
      <div className="card rounded-0 border-0 ms-2 m-1">
        <div className="card-head">
        <LogoLight />
        </div>
        <div className="card-body text-dark">
          <h1 className="card-title fs-4 text-center">Administrador</h1>
          <p className="card-text text-center">Bienvenido de nuevo</p>
        </div>
      </div>
    </>
  );
};
export default CardGalpon;


