import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.scss';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name</Card.Title>
        <Card.Text>
          Placeholder name
        </Card.Text>
        <Card.Title>Description</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Title>Due Time</Card.Title>
        <Card.Text>
          2025/04/25
        </Card.Text>
        <Button variant="primary">Remove</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;