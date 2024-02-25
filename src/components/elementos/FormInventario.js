import React, { useState } from 'react';
import api from '../api'

const FormInventario = ({ inventario, onSave }) => {
  const [producto, setProducto] = useState(inventario ? inventario.producto : '');
  const [descripcion, setDescripcion] = useState(inventario ? inventario.descripcion : '');
  const [cantidad, setCantidad] = useState(inventario ? inventario.cantidad : '');
  const [embalaje, setEmbalaje] = useState(inventario ? inventario.embalaje : '');
  const [valor, setValor] = useState(inventario ? inventario.valor : '');
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (inventario) {
      await api.put(`/inventario/${inventario.id}`, { producto, descripcion,cantidad,
    embalaje, valor });
    } else {
      const response = await api.post('/galpon', {  producto, descripcion,cantidad,
        embalaje, valor });
      setProducto('');
      setDescripcion('');
      setCantidad('');
      setEmbalaje('');
      setValor('');
      onSave(response.data);
    }
  };
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Producto:
        <input
          type="text"
          className='input m-1'
          value={producto}
          onChange={(event) =>setProducto(event.target.value)}
        />
      </label>
      <br />
      <label>
        Descripcion:
        <input
          className='input m-1'
          type="text"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
        />
      </label>
      <br />
      <label>
        Cantidad:
        <input
          className='input m-1'
          type="email"
          value={cantidad}
          onChange={(event) => setCantidad(event.target.value)}
        />
      </label>
      <br />
      <label>
        Embalaje:
        <input
          className='input m-1'
          type="email"
          value={embalaje}
          onChange={(event) => setEmbalaje(event.target.value)}
        />
      </label>
      <br />
      <label>
        Valor:
        <input
          className='input m-1'
          type="email"
          value={valor}
          onChange={(event) => setValor(event.target.value)}
        />
      </label>
      <br />
      {inventario ? (
        <button className='button btn-dark w-100' type="submit">Actualizar</button>
      ) : (
        <button className='button btn-dark w-100' type="submit">Guardar</button>
      )}
    </form>
  );
};

export default FormInventario;