import React, { useEffect, useState } from 'react'
import {Row, Col, ListGroup, Button, Image, ListGroupItem}
 from 'react-bootstrap'
import {Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductScreen = () => {
  const [product, setProduct] = useState([])
  const {id} = useParams();
  
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    }
    fetchProduct();
  },[id]);
  return (
      <div>
        <Link to ='/'><Button className='my-2'>Go Back</Button></Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} fluid></Image>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush" className='h-100'>
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                {/* <Rating value={5} text={`${product.numReviews} Reviews`}/> */}
              </ListGroupItem>
              <ListGroupItem>
              <h3>${product.price}</h3>
              </ListGroupItem>
              <ListGroupItem>
              {product.description}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant='flush' className='h-100'>
            <ListGroupItem>
              <Row>
                <Col><h5>Status :</h5></Col>
                <Col >
                  <h5>{product.countInStock > 0 ? `Only ${product.countInStock} left`: 'Out of Stock'}</h5> 
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className="btn-block" type='button'>
                Add to Cart
              </Button>
            </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
    </div>
  )
}

export default ProductScreen
