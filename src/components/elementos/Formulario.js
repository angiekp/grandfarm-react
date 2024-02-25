import {
    Form,
    Row,
    Col,
    Label,
    Input,
    FormGroup,
    Button
} from 'reactstrap';

function Formulario (){
    return (
        <Form>
  <Row className="row-cols-lg-auto g-3 align-items-center">
    <Col>
      <Label
        className="text-dark"
        for="exampleEmail"
      >
        Correo electronico
      </Label>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="something@idk.cool"
        type="email"
      />
    </Col>
    <Col>
      <Label
        className="text-dark
        "
        for="examplePassword"
      >
        Password
      </Label>
      <Input
        id="examplePassword"
        name="password"
        placeholder="don't tell!"
        type="password"
      />
    </Col>
    <Col>
      <FormGroup check>
        <Input
          id="exampleCheckbox"
          name="checkbox"
          type="checkbox"
        />
        <Label
          check
          for="exampleCheckbox"
        >
          Remember Me
        </Label>
      </FormGroup>
    </Col>
    <Col>
      <Button>
        Submit
      </Button>
    </Col>
  </Row>
</Form>
    );

}
export default Formulario;