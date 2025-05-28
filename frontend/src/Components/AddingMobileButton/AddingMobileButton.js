import Button from 'react-bootstrap/Button';
import './AddingMobileButton.scss'
import { useSelector } from 'react-redux';

function AddingMobileButton() {
  const option = useSelector((state) => state.option.value);

  return (
    <>
      <Button variant="info" className='btn-addgoal'>{option === 'tasks' ? 'Add Task' : 'Add Goal'}</Button>
    </>
  );
}

export default AddingMobileButton;