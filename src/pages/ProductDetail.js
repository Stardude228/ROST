import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Row, Col, Button, ButtonGroup, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addItemToCart, removeItemFromCart, fetchData } from '../redux/actions'

function ProductDetail(props) {
    
    const params = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const isInCart = (item, cartItems) => {
        return !!cartItems.find((a) => a.id === item.id)
    }

    const removeAndDelete = () => {
        console.log("DATA_ID", data.id)
        props.removeItemFromCart(data.id)
    }

    useEffect(() => {
        setLoading(true);
        Axios.get(process.env.REACT_APP_API_URL_PRODUCTS + '/posts/' + params.id)
            .then(({ data }) => {
                setLoading(false);
                setData(data);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [params.id])

    if (loading) return (<h1>Loading...</h1>)

    return (
        <Container style={{marginTop: "100px"}}>
            {data ?(
                <div className="MainProductDetailDiv">
                    <Row>
                        <Col md={6}>
                            <img style={{borderRadius: "50px"}} className='w-100' alt={data.title} src={data.image} />
                        </Col>
                        <Col md={6}>
                            <h1>{data.title}</h1>
                            <p>{data.comment}</p>
                            <ButtonGroup>
                                <Button onClick={() => props.addItemToCart(data)} color='primary'>{data.price} $</Button>
                                {isInCart(data, props.cartItems) ? (
                                    <ButtonGroup>
                                        <Button
                                            color="danger"
                                            onClick={() => removeAndDelete()}
                                        >
                                            Remove from cart
                                        </Button>
                                    </ButtonGroup>
                                ) : (
                                    <ButtonGroup>
                                        <Button
                                            className="d-flex align-items-center"
                                            onClick={() => props.addItemToCart(data)}
                                            color="success"
                                        >
                                            Add To Cart  
                                        </Button>
                                    </ButtonGroup>
                                    )}

                            </ButtonGroup>
                            
                        </Col>
                    </Row>
                </div>) :

                (<div>
                    <h4 className="text-danger mt-5">Error 404: Product {params.id} is not defined</h4>
                </div>)
            }
        </Container>
    )
}

const mapStateToProps = state => state.CartReducer

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart, fetchData })(ProductDetail)