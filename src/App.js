import logo from './logo.svg';
import './App.scss';
import Menu from './Components/Menu/Menu';
import Formulario from './Components/Formulario/Formulario';
import Item from './Components/Item/Item';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col>
            <Formulario></Formulario>
          </Col>
          <Col>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
