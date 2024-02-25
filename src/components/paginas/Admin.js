import React from "react";
import TableClient from "../elementos/TableClient";
import CardAdmin from '../elementos/CardAdmin';
import FormClient from '../elementos/FormClient'

const Admin = () => {
  return (
    <>
      <section className="default">
      <CardAdmin />
      <FormClient/>
      <h1 className="mt-4">Empleados activos</h1>
      {/**<TableData/> */}
      <TableClient/>
      </section>
    </>
  );
};
export default Admin;