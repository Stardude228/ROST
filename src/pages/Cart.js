import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    NavLink,
    Card, NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/actions'
import Ordering from './Ordering';

const CartModal = ({ cartItems: info, ...props }) => {
    var token = localStorage.getItem("token")
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const dispatch = useDispatch();
    let total = 0;

    function delData() {
        dispatch({
            type: "CLEAR_CART"
        })
    }

    function removeProduct(id) {
        props.removeItemFromCart(id)
    }

    function delCartItems() {
        toggle()
        dispatch({
            type: "CLEAR_CART"
        })
    }

    return (

        <div>
            <NavLink onClick={toggle} className="HeaderLinks">
                Cart
            </NavLink>
            <div style={{ position: "absolute", top: "2px", background: "grey", borderRadius: "10px" }}
                className="CartsNumberOfProducts">{info?.length !== 0 ? (info?.length) : (null)}</div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><p>Your cart</p></ModalHeader>
                {!!token ?
                    (<div>
                        {info?.length !== 0 ? (
                            <div>
                                <ModalBody style={{ flexWrap: "wrap" }} className="d-flex">
                                    {info.map((item) => (
                                        <Card className="col-md-5 m-2" key={item.id}>
                                            <div item={item}>
                                                <div className="feature">
                                                    <div className="myImg-container">
                                                        <img
                                                            className="HomeBestsellers h-25 w-100 pt-3"
                                                            src={item.image} />
                                                    </div>
                                                    <h5>{item.title}</h5>
                                                    <p className="d-none">{total += parseInt(item.price)}</p>
                                                    <Button
                                                        className="mb-3"
                                                        size="sm"
                                                        color="danger"
                                                        onClick={() => removeProduct(item.id)}
                                                    >
                                                        Remove product
                                                        </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </ModalBody>

                                <b className="ml-5">Total {total + '$'}</b>

                                <ModalFooter className="mt-3">
                                    <NavItem onClick={() => delCartItems()}>
                                        <Ordering />
                                    </NavItem>
                                    <Button color="secondary" onClick={toggle}>Back</Button>{' '}
                                    {info?.length !== 1 ? (
                                        <Button color="danger" onClick={() => delData()}>Remove all products</Button>) :
                                        (<div />)}

                                </ModalFooter>
                            </div>) :
                            (<div className="text-center">
                                <h1 style={{ padding: "20px" }}>You do not have anything yet</h1>
                            </div>)}
                    </div>) :
                    (<ModalBody className="text-center">Please <Link style={{ opacity: "0.7" }} to='/auth/login'>login</Link></ModalBody>)}
            </Modal>
        </div>
    );
}

const mapStateToProps = state => {
    let { cartItems } = state.CartReducer
    return { cartItems };
}

export default connect(mapStateToProps, { removeItemFromCart })(CartModal);