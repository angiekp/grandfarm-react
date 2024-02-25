import React from "react";
import { Form, FormGroup, Input, Label, Button, NavLink } from "reactstrap";

const Login = () => {
  
  return (
    <Form floating>
      <FormGroup className="p-2" floating>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
        />
        <Label for="exampleEmail">Correo electronico</Label>
      </FormGroup>
      <FormGroup className="p-2" floating>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Password"
          type="password"
        /> 
        <Label for="examplePassword">Contraseña</Label>
        <Button className="w-100 btn btn-dark mt-2">Confirmar</Button>
        <NavLink style={{textDecoration:false}} href="https://github.com/leodev218/reactApp">
          <p class="mt-2 m-5 text-white">&copy; GrandFarmAPI.tech</p>
        </NavLink>
      </FormGroup>
    </Form>
  );
};
export default Login;
