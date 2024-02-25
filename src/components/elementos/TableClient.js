import React, { useEffect, useState } from 'react';
import api from '../api'

const TableClient = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/client');
      setClients(response.data);
    };

    fetchData();
  }, []);

  return (
    <table className='table table-bordered table-borderless table-responsive ms-2 me-2 mt-2'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>

        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.id}</td>
            <td>{client.nombre}</td>
            <td>{client.apellido}</td>
            <td>{client.correo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableClient;