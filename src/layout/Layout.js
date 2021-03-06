import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout(props){
    return (
        <div>
            <Header />
            <div className="page-wrapper">
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;