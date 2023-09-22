import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import clayPotImage from '../assets/img/clay_pot.jpg';

function ProductCard() {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Img variant="top" src={clayPotImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;