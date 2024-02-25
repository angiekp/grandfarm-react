import React from "react";
import FormGalpon from "../elementos/FormGalpon";
import TableGalpon from "../elementos/TableGalpon";

const Home = () => {
  return (
    <>
      <section className="default">
      <h1 className="mt-2"> Galpones </h1>
      <FormGalpon/>
      <h1>Galpones activos</h1>
      <TableGalpon/>
      </section>
    </>
  );
};
export default Home;