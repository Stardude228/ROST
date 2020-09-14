import React, { useEffect } from 'react'
import {
    Container, Col, Row
} from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../../redux/actions'
import { addItemToCart } from '../../redux/actions'
import { connect } from 'react-redux';

function Soon(props) {

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
                    <h3 id="products" className="heading">Soon will be</h3>
                    <div className="row text-center">
                        {props.data.map((item) => (
                            item.title === "Huawei" ? (
                            <Col className="my-4" md={4} key={item.id}>
                                <div item={item}>
                                    <div className="feature">
                                        <img className="w-75" src={item.image} />
                                        <h4>{item.title}</h4>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                            </Col>):(<div key={item.id}/>)
                        ))}
                        {props.data.map((item) => (
                            item.title === "One plus" ? (
                            <Col className="my-4" md={4} key={item.id}>
                                <div item={item}>
                                    <div className="feature">
                                        <img className="w-75" src={item.image} />
                                        <h4>{item.title}</h4>
                                        <p>{item.comment}</p>
                                    </div>
                                </div>
                            </Col>):(<div key={item.id}/>)
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

export default connect(mapStateToProps, mapDispatchToProps)(Soon);