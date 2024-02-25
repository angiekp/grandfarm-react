import React, { useEffect, useState } from 'react';
import api from '../api'

const TableInventario = () => {
  const [inventarios, setInventarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/inventario');
      setInventarios(response.data);
    };

    fetchData();
  }, []);

  return (
    <table className='table table-bordered table-borderless table-responsive ms-2 me-2 mt-2'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Prodcucto</th>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Embalaje</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {inventarios.map((inventario) => (
          <tr key={inventario.id}>
            <td>{inventario.id}</td>
            <td>{inventario.producto}</td>
            <td>{inventario.descripcion}</td>
            <td>{inventario.cantidad}</td>
            <td>{inventario.embalaje}</td>
            <td>{inventario.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInventario;