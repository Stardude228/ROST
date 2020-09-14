import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { FormGroup, ButtonGroup } from 'reactstrap';
import { Form, Col } from 'react-bootstrap';


export default class PaymentForm extends React.Component {
    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="PaymentForm" className="mt-3">
                <Cards
                    cvc={this.state.cvc}
                    expiry={this.state.expiry}
                    focused={this.state.focus}
                    name={this.state.name}
                    number={this.state.number}
                />
                <FormGroup className="bg-info d-flex-inline-block align-content-center mt-3">
                    <h3 style={{ textAlign: "center" }}>Type your infomation</h3>

                    <Form className="mb-3">
                        <Form.Row className="d-flex justify-content-center mt-3">
                            <Col md={4}>
                                <Form.Control type="number"
                                    name="number"
                                    placeholder="Card Number"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus} />
                            </Col>
                            <Col md={4}>
                                <Form.Control type="number"
                                    name="expiry"
                                    placeholder="Valid"
                                    onChange={this.handleInputChange}
                                    onFocus={this.handleInputFocus} 
                                    />
                            </Col>

                        </Form.Row>

                        <Form.Row className="d-flex justify-content-center mt-3 mb-3" />

                        <ButtonGroup className="d-flex align-content-center" />

                    </Form>

                </FormGroup>

            </div>
        );
    }
}


