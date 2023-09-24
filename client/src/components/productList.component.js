import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';
import clayPotImage from '../assets/img/clay_pot.jpg';

const productCartData = [
  {
    "productName": "Clay pot",
    "price": 100,
    "description": "this is a clay pot made with natural clay"
  }, 
  {
    "productName": "flower vass",
    "price": 2500,
    "description": "flowes"
  }
]

function ProductCart() {
  return (

    <Grid container spacing={2} sx={{ marginTop: '10px' }}>
      {productCartData.map((data) => {
        return(
          <Card style={{ width: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src={clayPotImage} />
            <Card.Body>
              <Card.Title>{data.productName}</Card.Title>
              <Card.Text>
                Rs. {data.price}
              </Card.Text>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Button variant="primary">Add to cart</Button>
              &nbsp; &nbsp;
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Grid>
  );
}

export default ProductCart;