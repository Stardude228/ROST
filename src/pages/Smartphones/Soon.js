import React, { useEffect } from 'react'
import {
    Container, ButtonGroup, Row, Card, CardImg, CardTitle, CardSubtitle
} from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchData } from '../../redux/actions'
import { addItemToCart } from '../../redux/actions'
import { connect } from 'react-redux';
import cartSVG from '../../assets/icons/cart.svg'
import infoSVG from '../../assets/icons/info.svg'
import '../../components/cssFiles/MainProducts.css'
import BlockOfProducts from '../../components/BlockOfProducts';

function Soon(props) {

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
                    <h3 id="products" className="heading">Soon will be</h3>
                    <div className="row text-center">
                        {props.data.map((item) => (
                            item.title.toLowerCase() === "huawei" ? (<BlockOfProducts item={item}/>):(<div key={item.id}/>)
                        ))}
                        {props.data.map((item) => (
                            item.title.toLowerCase() === "one plus" ? (<BlockOfProducts item={item}/>):(<div key={item.id}/>)
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