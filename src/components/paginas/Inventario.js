import React from "react";
import FormInventario from "../elementos/FormInventario";
import TableInventario from "../elementos/TableInventario";

const Home = () => {
  return (
    <>
      <section className="default">
      <h1> Inventario </h1>
      <FormInventario/>
      <h1>Suministros</h1>
      <TableInventario/>
      </section>
    </>
  );
};
export default Home;