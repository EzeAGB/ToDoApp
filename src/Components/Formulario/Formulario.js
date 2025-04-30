import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Formulario.scss';
import { addTodo } from '../../Reducers/todoSlice';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';

function Formulario() {
  const dispatch = useDispatch();

  const inputRefName = useRef();
  const inputRefDescription = useRef();
  const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      'name': inputRefName.current.value,
      'description': inputRefDescription.current.value,
      'dueDate': inputRefDueDate.current.value,
    }));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" ref={inputRefName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" ref={inputRefDescription}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Due Date</Form.Label>
        <Form.Control type="date" placeholder="Due Time" ref={inputRefDueDate}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={addItem}>
        Add Goal
      </Button>
    </Form>
  );
}

export default Formulario;