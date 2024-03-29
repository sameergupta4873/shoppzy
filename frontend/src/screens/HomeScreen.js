import React, { useEffect } from 'react'
import{Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {useDispatch,useSelector} from 'react-redux'
import Product from '../components/Product'
import {listProducts} from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])


  return (
    <>
      <h1>Latest Products</h1>
      {loading ? <Loader/> : error ? <Message/> :<Row>
        {products.map(product => (
            <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
      </Row>}
      
    </>
  )
}

export default HomeScreen
