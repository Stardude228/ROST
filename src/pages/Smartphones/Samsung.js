import React, { useEffect } from 'react'
import {
    Button, Container, ButtonGroup, Col, Row
} from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchData } from '../../redux/actions'
import { addItemToCart } from '../../redux/actions'
import { connect } from 'react-redux';

function Samsung(props) {

    const history = useHistory()

    const handleClick = (e, item) => {
        e.stopPropagation()
        props.addItemToCart(item)
    }

    const location = useLocation();

    useEffect(() => {
        const search = new URLSearchParams(location.search);
        props.fetchData(search);
    }, [location]);

    if (props.error) {
        return (
            <h4 className="text-danger">
                {props.error.message}
            </h4>)
    }

    return (
        <div style={{ marginTop: "100px" }}>
            <Container>
                <Row className="mt-3 justify-content-center">
                    <h3 id="products" className="heading">Samsungs</h3>
                    <div className="row text-center">
                        {props.data.map((item) => (
                            item.title === "Samsung" ? (
                            <Col className="my-4" md={4} key={item.id}>
                                <div item={item}>
                                    <div className="feature">
                                        <img className="w-75" src={item.image} />
                                        <h4>{item.title}</h4>
                                        <p>{item.comment}</p>
                                        <ButtonGroup>
                                            <Button color="primary" onClick={() => history.replace('/products/' + item.id)}>Get more info</Button>
                                            <Button className="btn-success" onClick={(e) => handleClick(e, item)}>{item.price}$</Button>
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </Col>) : (<div key={item.id}/>)
                        ))}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => {
    const { data, loading, err } = state.ProductReducer;
    return { data, loading, err };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page) => dispatch(fetchData(page)),
        addItemToCart: (id) => dispatch(addItemToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Samsung);