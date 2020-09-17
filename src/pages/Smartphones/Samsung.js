import React, { useEffect } from 'react'
import { Container, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import { fetchData } from '../../redux/actions'
import { addItemToCart } from '../../redux/actions'
import { connect } from 'react-redux';
import '../../components/cssFiles/MainProducts.css'
import BlockOfProducts from '../../components/BlockOfProducts';

function Samsung(props) {

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
                            item.title.toLowerCase() === "samsung" ? (<BlockOfProducts item={item}/>) : (<div key={item.id}/>)
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