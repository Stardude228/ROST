import React, { useEffect, useState } from 'react'
import '../pages/CssFiles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Button, ButtonGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/actions'
import { fetchData } from '../redux/actions'
import { useHistory } from 'react-router-dom';
import './cssFiles/MainProducts.css'

function MainProducts(props) {

    const history = useHistory();

    const handleClick = (e, item) => {
        e.stopPropagation()
        props.addItemToCart(item)
    }

    const [page, setPage] = useState(1);

    useEffect(() => {
        const search = new URLSearchParams(history.location.search);
        setPage(search.get("page") || 1)
    }, [history])

    return (
        <div className="text-center">
            <h1 id="products">Main Products</h1>
            <Row className="d-flex w-100 mt-3 justify-content-center">
                {props.data.map((item) => (
                    <div className="col-md-4" key={item.id}>
                        <Card onClick = {() => history.replace('/products/' + item.id)} style={{cursor: "pointer",borderRadius: "20px"}} className="m-3">
                            <CardImg style={{borderTopRightRadius: "20px", borderTopLeftRadius: "20px"}} top src={item.image} alt="Card image cap" />
                            <CardBody item={item}>
                                <CardTitle>{item.comment}</CardTitle>
                                <CardSubtitle><b>ID: </b>{item.id}</CardSubtitle>
                                <CardText>It might seem that this is some quick example to build a card, but
                                    i wrote it by myself</CardText>
                                <ButtonGroup>
                                    <Button
                                        color="primary"
                                        onClick={() => history.replace('/products/' + item.id)}>
                                        Get more info
                                            </Button>

                                    <Button
                                        color="success"
                                        onClick={(e) => handleClick(e, item)}>
                                        {item.price}$
                                            </Button>

                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </div>
                ))}
            </Row>
        </div>
    )
}

const mapStateToProps = state => state.CartReducer;

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page) => dispatch(fetchData(page)),
        addItemToCart: (id) => dispatch(addItemToCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainProducts);
