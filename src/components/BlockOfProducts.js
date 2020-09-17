import React from 'react'
import '../pages/CssFiles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonGroup, Card, CardImg, CardTitle, CardSubtitle } from 'reactstrap'
import './cssFiles/MainProducts.css'
import infoSVG from '../assets/icons/info.svg'
import cartSVG from '../assets/icons/cart.svg'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/actions'
import { fetchData } from '../redux/actions'
import Paginations from './Paginations'

function BlockOfProducts(props) {

    const {item} = props

    const history = useHistory()

    const handleClick = (e, item) => {
        e.stopPropagation()
        props.addItemToCart(item)
    }

    return (
        <div className="col-md-4" key={item.id}>
            <Card
                onClick={() => history.replace('/products/' + item.id)}
                style={{ cursor: "pointer", borderRadius: "20px" }}
                className="m-3 MainProductsCard"
            >
                <CardImg
                    style={{ borderRadius: "20px" }}
                    top src={item.image}
                    alt="Card image cap"
                />
                <div className="MainProductsInformation">
                    <CardTitle className="MainProductsCardTitle">{item.comment}</CardTitle>
                    <div className="MainProductsShadow" />
                    <CardSubtitle className="MainProductsID">ID: {item.id}</CardSubtitle>
                    {item.title !== "Huawei" && item.title !== "One plus" ? (
                    <ButtonGroup className="MainProductsButtonGroup">
                        <button
                            className="MainProductsButtons"
                            onClick={() => history.replace('/products/' + item.id)}>
                            <img 
                                style={{width: "20px", 
                                        padding: "2px", 
                                        background: "white", 
                                        borderRadius: "20px" }} 
                                src={infoSVG} 
                            />
                        </button>

                        <button
                            className="MainProductsButtons"
                            onClick={(e) => handleClick(e, item)}>
                            <img style={{ width: "20px" }} src={cartSVG} />
                        </button>
                    </ButtonGroup>) : (<div/>)}
                </div>
            </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlockOfProducts)
