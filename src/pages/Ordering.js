// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
// import Axios from "axios";
// import { connect } from "react-redux";
// import { Container, Form } from "reactstrap";
// import { useHistory } from "react-router-dom";
// // import PaymentForm from "../components/CreditCard";

// function Ordering(props) {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [subject, setSubject] = useState("");
//     const [phone, setPhone] = useState("");
//     const [cardNumber, setCardNumber] = useState("");
//     const [valid, setValid] = useState("");

//     const history = useHistory()
//     const { cartItems } = props

//     function postData() {
//         const data = {
//             id: Date.now(),
//             name,
//             email,
//             subject,
//             phone,
//             cardNumber,
//             valid,
//             productsID: cartItems.map(item => item.id)
//         }
//         if (name !== '' && email !== '' && cardNumber !== '') {
//             async function postOrder() {
//                 const res = await Axios.post(`${process.env.REACT_APP_API_URL_PRODUCTS}/orders`, data)
//             }
//             postOrder()
//         } else {alert("Order was not sent") }
//     }

//     return (
//         <Container style = {{marginTop: "100px", justifyContent: "center"}}>
//             <section>
//                 <h2 className="h1-responsive font-weight-bold text-center my-5">
//                     Order please!
//                 </h2>

//                 <MDBRow>
//                     <MDBCol className="col-md-8 mb-4 mx-auto">
//                         <MDBCard>
//                             <MDBCardBody>
//                                 <div className="form-header blue accent-1">
//                                     <h3 className="mt-2">
//                                         <MDBIcon icon="envelope" /> Write to us:
//                                     </h3>
//                                 </div>
//                                 <p className="dark-grey-text">
//                                     We'll write rarely, but only the best content.
//                                 </p>
//                                 <Form>
//                                     <div className="md-form">
//                                         <MDBInput
//                                             className="mt-3"
//                                             icon="user"
//                                             label="Your name"
//                                             iconClass="grey-text"
//                                             type="text"
//                                             id="form-name"
//                                             value={name}
//                                             onChange={(e) => setName(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="md-form">
//                                         <MDBInput
//                                             className="mt-3"
//                                             icon="envelope"
//                                             label="Your email"
//                                             iconClass="grey-text"
//                                             type="text"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="md-form">
//                                         <MDBInput
//                                             className="mt-3"
//                                             icon="pencil-alt"
//                                             label="Your phone"
//                                             iconClass="grey-text"
//                                             type="number"
//                                             value={phone}
//                                             onChange={(e) => setPhone(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="md-form">
//                                         <MDBInput
//                                             className="mt-3"
//                                             icon="tag"
//                                             label="Subject"
//                                             iconClass="grey-text"
//                                             type="text"
//                                             value={subject}
//                                             onChange={(e) => setSubject(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="md-form">
//                                         <MDBInput
//                                             className="mt-3"
//                                             icon="pencil-alt"
//                                             label="Card Number"
//                                             iconClass="grey-text"
//                                             type="number"
//                                             value={cardNumber}
//                                             onChange={(e) => setCardNumber(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="md-form">
//                                         <MDBInput
//                                             className="mt-3"
//                                             icon="pencil-alt"
//                                             label="Valid"
//                                             iconClass="grey-text"
//                                             type="number"
//                                             value={valid}
//                                             onChange={(e) => setValid(e.target.value)}
//                                         />
//                                     </div>
//                                     <div className="text-center">
//                                         {/* <PaymentForm /> */}
//                                         <MDBBtn onClick={() => postData()} type="submit" color="primary">Submit</MDBBtn>
//                                     </div>
//                                 </Form>
//                             </MDBCardBody>
//                         </MDBCard>
//                     </MDBCol>
//                 </MDBRow>
//             </section>
//         </Container>
//     );
// }

// const mapStateToProps = state => {
//     let { cartItems } = state.CartReducer
//     return { cartItems };
// }

// export default connect(mapStateToProps, null)(Ordering);


import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

toast.configure();

function Ordering() {

    const cartItems = useSelector(state => state.CartReducer.cartItems);

    const product = {
        items: cartItems.map((item) => item.id),
        price: cartItems.reduce((total, item) => total + parseFloat(item.price), 0)
    }

    console.log("CART_ITEMS", cartItems)
    async function handleToken(token) {
        const response = await axios.post(
            "http://localhost:8000/orders",
            { token, product }
        );
        const { status } = response;
        console.log("Response:", response);
        if (status === 201) {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <StripeCheckout
            stripeKey="pk_test_51HRcArLBmCikGAeFNxU2hOwJtJyqc7xrHZ0E2BhAnFlSNPUmubgu8wnjA0QDOYP2SyyN9NGrqsLQAh3CA2tAIBEk00tjm6PBWx"
            token={handleToken}
            amount={product.price * 100}
            name="Order"
            billingAddress
            shippingAddress
        />
    );
}

export default Ordering