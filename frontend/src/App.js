import logo from './logo.svg';
import './App.scss';
import Menu from './Components/Menu/Menu';
import Formulario from './Components/Formulario/Formulario';
import Item from './Components/Item/Item';
import { Col, Container, Row } from 'react-bootstrap';
import AddingMobileButton from './Components/AddingMobileButton/AddingMobileButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTodo, initAddTodo } from './Reducers/todoSlice';
import { selectTodos } from './Reducers/todoSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  
  const arr = [
    {
      name: 'sacar a pasear al perro1',
      description: 'sacar a pasear al perro1',
      dueDate: '2022-01-01'
    },
    {
      name: 'sacar a pasear al perro2',
      description: 'sacar a pasear al perro2',
      dueDate: '2022-01-01'
    }
  ];
  useEffect(() => {
    arr.map((item) => {
      dispatch(initAddTodo(item));
    });
  }, []);

  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col xs={0} md={0} className='d-none d-sm-none d-md-block'>
            <Formulario/>
          </Col>
          <Col xs={0} sm={0}>
            <Row className='d-m-none'>
              <div className='bg-transparent overlapping-div'>
                <AddingMobileButton className='float-left'/>
              </div>
            </Row>
            <Row>
              <div className='scrolling'>
                {
                  todos.map((todo, index) => {
                    return (
                      <Item key={index} name={todo.name} description={todo.description} dueDate={todo.dueDate} />
                    )
                  })
                }
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
