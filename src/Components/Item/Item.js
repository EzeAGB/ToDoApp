import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';
import { CardBody } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../Reducers/todoSlice';

function Item(props) {
  const dispatch = useDispatch();

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeTodo(props.name));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text className='fw-bold'>
          Descripción
        </Card.Text>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Text className='fw-bold'>
          Due Date
        </Card.Text>
        <Card.Text>
          {props.dueDate}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="info">Editar</Button>
        <Button variant="info" onClick={removeItem}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;