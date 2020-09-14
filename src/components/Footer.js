import React from 'react'
import './cssFiles/Footer.css'
import { Link, BrowserRouter, useHistory } from 'react-router-dom'
import { Container } from 'reactstrap'
import fix from '../assets/icons/fix.svg'
import delivery from '../assets/icons/delivery.svg'
import cycle from '../assets/icons/cycle.svg'
import wallet from '../assets/icons/wallet.svg'
import youtube from '../assets/icons/youtube.svg'
import instagram from '../assets/icons/instagram.svg'
import twitter from '../assets/icons/twitter.svg'
import facebook from '../assets/icons/facebook.svg'

function Footer() {

    const history = useHistory()

    return (
        <div className="MainFooterDiv">
            <BrowserRouter>
                <Container>
                    <div className="top-services mt-5">
                        <ul className="footer-specs">
                            <li className="spec">
                                <img src={cycle} className="icon icon-cycle"></img>
                                Opportunity of easy changing (if it is not working)
                            </li>
                            <li className="spec">
                                <img src={fix} className="icon icon-cycle"></img>
                                Free fixing
                            </li>
                            <li className="spec">
                                <img src={delivery} className="icon icon-cycle"></img>
                                Fast and furios (delivery)
                            </li>
                            <li className="spec">
                                <img src={wallet} className="icon icon-cycle"></img>
                                Cash payment
                            </li>
                        </ul>
                    </div>
                </Container>
                <nav className="footer-menu mt-5">
                    <div className="d-flex justify-content-center">
                        <div className="footer-group">
                            <div
                                id="map-container"
                                className="rounded z-depth-1-half map-container"
                                style={{ height: "400px" }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.7811588532036!2d74.5897314153398!3d42.87746297915546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d04d040001%3A0x435e5287f35c7d3c!2z0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyBNYWtlcnMgQ29kaW5nIEJvb3RjYW1w!5e0!3m2!1sru!2skg!4v1599750543002!5m2!1sru!2skg"
                                    title="This is a unique title"
                                    width="100%"
                                    height="70%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                />
                            </div>
                        </div>
                        <div className="footer-group">
                            <ul>
                                <h4 className="footer-title">Category</h4>
                                <li style={{ cursor: "pointer" }} onClick={() => history.replace("/iphone")}>Iphone</li>
                                <li style={{ cursor: "pointer" }} onClick={() => history.replace("/samsung")}>Samsung</li>
                                <li style={{ cursor: "pointer" }} onClick={() => history.replace("/xiaomi")}>Xiaomi</li>
                                <li style={{ cursor: "pointer" }} onClick={() => history.replace("/soon")}>Huawei</li>
                                <li style={{ cursor: "pointer" }} onClick={() => history.replace("/soon")}>One Plus</li>
                            </ul>
                        </div>
                        <div className="footer-group">
                            <ul>
                                <h4 className="footer-title">Contacts</h4>
                                <li>Monday - Saturday</li>
                                <li>Work time: 08:00 - 22:00</li>
                                <li style={{ cursor: "pointer" }} onClick={() => history.replace("#creators")}>Contacts</li>
                                <ul className="footer-social">
                                    <li className="icon-social">
                                        <a href="https://www.facebook.com/"><div className="spec social-facebook"><img style={{width: "20px"}} src = {facebook}/></div></a>
                                    </li>
                                    <li className="icon-social">
                                        <a href="https://twitter.com/?lang=ru"><div className="spec social-twitter"><img style={{width: "20px"}} src = {twitter}/></div></a>
                                    </li>
                                    <li className="icon-social">
                                        <a href="https://www.instagram.com/?hl=ru"><div className="spec social-instagram"><img style={{width: "20px"}} src = {instagram}/></div></a>
                                    </li>
                                    <li className="icon-social">
                                        <a href="https://www.youtube.com/?hl=ru"><div className="spec social-youtube"><img style={{width: "20px"}} src = {youtube}/></div></a>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </nav>
            </BrowserRouter>
        </div>
    )
}

export default Footer