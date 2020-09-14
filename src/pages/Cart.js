import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavItem, NavLink, ButtonGroup, Col } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../redux/actions'

const CartModal = ({ cartItems: info , ...props}) => {
    var token = localStorage.getItem("token")
    const [modal, setModal] = useState(false);
    const history = useHistory()
    const toggle = () => setModal(!modal);

    let total = 0;

    function delData(){
        localStorage.setItem("cart", [])
        function delDataSecondTime() {
            localStorage.removeItem("cart")
            setModal(false);
        }
        delDataSecondTime()
        var x = window.location.href;
        x = x.split( '#' );
        window.location.href = x[0];
    }

    function orders() {
        setModal(false)
        history.replace("/ordering");
    }

    function removeProduct(id) {
        props.removeItemFromCart(id)
    }

    return (

        <>
                <NavLink onClick={toggle} className="HeaderLinks">
                    Cart
                </NavLink>
            <div style={{ position: "absolute", top: "2px", background: "grey", borderRadius: "10px" }} 
            className="CartsNumberOfProducts">{info?.length}</div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}><p>Your cart</p></ModalHeader>
                {!!token ?
                    (<div>
                        {info?.length !== 0 ? (
                            <>
                                <ModalBody>
                                    {info.map((item) => (
                                        <Col className="my-4 col-md-12" key={item.id}>
                                            <div item={item}>
                                                <div className="feature">
                                                    <img className="HomeBestsellers w-75" src={item.image} />
                                                    <h4>{item.title}</h4>
                                                    <p>Total {total += parseInt(item.price)} $</p>
                                                    <ButtonGroup>
                                                        <Button color="primary" onClick = {() => removeProduct(item.id)}>Remove product</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </div>
                                        </Col>
                                    ))}
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={() => orders()}>Order</Button>{' '}
                                    <Button color="secondary" onClick={toggle}>Back</Button>{' '}
                                    <Button color="danger" onClick={() => delData()}>Remove all products</Button>
                                </ModalFooter>
                            </>) : (<div className="text-center"> <h1 style={{ padding: "20px"}}>You do not have anything yet</h1> </div>)}
                    </div>) :
                    (<ModalBody className="text-center">Please <Link style={{ opacity: "0.7" }} to='/auth/login'>login</Link></ModalBody>)}
            </Modal>
        </>
    );
}

const mapStateToProps = state => {
    let { cartItems } = state.CartReducer
    return { cartItems };
}

export default connect(mapStateToProps, {removeItemFromCart})(CartModal);