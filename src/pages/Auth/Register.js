import React, { useState, useEffect, } from 'react'
import { Modal, Row, Col, Label, Input, ButtonGroup, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { REGISTER_USER_FAILED, CLEAR_ERROR } from '../../redux/auth/constants'
import { registerUser } from '../../redux/auth/actions';

function Register(props) {
    console.log('register')

    const [modalIsOpen, setModalIsOpen] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const history = useHistory();


    const handleRegister = (e) => {
        e.preventDefault();
        //! Check Passwords
        if (password !== repeatPassword) {
            props.setErr("Passwords do not match")
            return;
        }
        props.registerUser({ email, password }, history)
    }

    const closeModal = () => {
        setModalIsOpen(false);
        history.goBack()
    }

    const { clearError } = props;
    useEffect(() => {
        clearError()
    }, [clearError])

    return (
        <div>
            <Modal isOpen={modalIsOpen} toggle={() => setModalIsOpen(!modalIsOpen)}>
                <Row style={{ width: '100%' }} className="align-items-center justify-content-center py-5">
                    <Col md={8}>
                        <form onSubmit={handleRegister}>
                            {props.err && (
                                <h4 className="text-danger">Error: {props.err.response.data.message}</h4>
                            )}
                            <h3>Register</h3>
                            <Label className="mt-3" htmlFor="email">
                                Enter your email:
                                    </Label>
                            <Input
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                            />
                            <Label className="mt-3" htmlFor="password">
                                Enter your password:
                                    </Label>
                            <Input
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Label className="mt-3" htmlFor="password">
                                Enter again your password:
                                    </Label>
                            <Input
                                id="repeat_password"
                                name="repeat_password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}

                            />
                            <ButtonGroup className="w-100 mt-3">
                                <Button color='primary' type="submit">Submit</Button>
                                <Button type="reset" type="reset" onClick={() => closeModal()}>Cancel</Button>
                            </ButtonGroup>
                            <p className="text-center mt-3">You have registered? <br /> <Link to="/auth/login">Enter</Link></p>
                        </form>
                    </Col>
                </Row>
            </Modal>
        </div>
    )
}


const mapStateToProps = state => {
    const { loading, err } = state.AuthReducer;
    return { loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: ({ email, password }, history) => {
            dispatch(
                registerUser(
                    { email, password }, history
                )
            )
        },
        setErr: (message) => dispatch({
            type: REGISTER_USER_FAILED,
            payload: { response: { data: { message } } }
        }),
        clearError: () => dispatch({
            type: CLEAR_ERROR,
        })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Register)