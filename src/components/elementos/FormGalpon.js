import React, { useState } from 'react';
import api from '../api'

const FormGalpon = ({ galpon, onSave }) => {
  const [codGalpon, setCodGalpon] = useState(galpon ? galpon.codGalpon : '');
  const [cantPollo, setCantPollo] = useState(galpon ? galpon.cantPollo : '');
  const [temperatura, setTemperatura] = useState(galpon ? galpon.temperatura : '');
  const [controlPlagas, setControlPlagas] = useState(galpon ? galpon.controlPlagas : '');
  const [aseo, setAseo] = useState(galpon ? galpon.aseo : '');
  const [estado, setEstado] = useState(galpon ? galpon.estado : '');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (galpon) {
      await api.put(`/client/${galpon.id}`, { codGalpon, cantPollo,temperatura,
    controlPlagas, aseo, estado });
    } else {
      const response = await api.post('/galpon', {  codGalpon, cantPollo,temperatura,
        controlPlagas, aseo, estado  });
      setCodGalpon('');
      setCantPollo('');
      setTemperatura('');
      setControlPlagas('');
      setAseo('');
      setEstado('');
      onSave(response.data);
    }
  };
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Codigo galpon:
        <input
          type="text"
          className='input m-1'
          value={codGalpon}
          onChange={(event) => setCodGalpon(event.target.value)}
        />
      </label>
      <br />
      <label>
        Cantidad pollo:
        <input
          className='input m-1'
          type="text"
          value={cantPollo}
          onChange={(event) => setCantPollo(event.target.value)}
        />
      </label>
      <br />
      <label>
        temperatura:
        <input
          className='input m-1'
          type="email"
          value={temperatura}
          onChange={(event) => setTemperatura(event.target.value)}
        />
      </label>
      <br />
      <label>
        temperatura:
        <input
          className='input m-1'
          type="email"
          value={temperatura}
          onChange={(event) => setTemperatura(event.target.value)}
        />
      </label>
      <br />
      <label>
        Control plagas:
        <input
          className='input m-1'
          type="email"
          value={controlPlagas}
          onChange={(event) => setControlPlagas(event.target.value)}
        />
      </label>
      <br />
      <label>
        Aseo:
        <input
          className='input m-1'
          type="email"
          value={aseo}
          onChange={(event) => setAseo(event.target.value)}
        />
      </label>
      <br />
      <label>
        Estado:
        <input
          className='input m-1'
          type="email"
          value={estado}
          onChange={(event) => setEstado(event.target.value)}
        />
      </label>
      <br />
      {galpon ? (
        <button className='button btn-dark w-100' type="submit">Actualizar</button>
      ) : (
        <button className='button btn-dark w-100' type="submit">Guardar</button>
      )}
    </form>
  );
};

export default FormGalpon;