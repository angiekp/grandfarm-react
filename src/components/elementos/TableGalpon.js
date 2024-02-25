import React, { useEffect, useState } from 'react';
import api from '../api'

const TableGalpon = () => {
  const [galpones, setGalpones] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/galpon');
      setGalpones(response.data);
    };

    fetchData();
  }, []);

  return (
    <table className='table '>
      <thead>
        <tr>
          <th>Id</th>
          <th>Cod Galpon</th>
          <th>Cantidad</th>
          <th>Temperatura</th>
          <th>Plagas</th>
          <th>Aseo</th>
          <th>Estado</th>

        </tr>
      </thead>
      <tbody>
        {galpones.map((galpon) => (
          <tr key={galpon.id}>
            <td>{galpon.id}</td>
            <td>{galpon.codGalpon}</td>
            <td>{galpon.cantPollo}</td>
            <td>{galpon.temperatura}</td>
            <td>{galpon.controlPlagas}</td>
            <td>{galpon.aseo}</td>
            <td>{galpon.estado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableGalpon;