import React, { useEffect, useState } from 'react'
import '../pages/CssFiles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row } from 'reactstrap'
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/actions'
import { fetchData } from '../redux/actions'
import { useHistory } from 'react-router-dom';
import './cssFiles/MainProducts.css'
import BlockOfProducts from './BlockOfProducts';
import Paginations from './Paginations';

function MainProducts(props) {

    const history = useHistory();
    
    console.log(props);

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
                    item.title !== "One plus" && item.title !== "Huawei" ? (<BlockOfProducts item={item}/>) : (<div item={item}/>)
                ))}
            </Row>
            {/* <Paginations /> */}
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
