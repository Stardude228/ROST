import React, { useEffect } from 'react';
import './CssFiles/Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchData } from '../redux/actions';
import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import Creators from '../components/Creators';
import HomeCarousel from '../components/HomeCarousel';
import { Container } from 'reactstrap';
// import MainProducts from '../components/MainProducts';
// import Paginations from '../components/Paginations';


function Home(props) {

    const location = useLocation();

    useEffect(() => {
        const search = new URLSearchParams(location.search);
        props.fetchData(search);
    }, [location]);

    if(props.error){
        return(
        <h4 className="text-danger">
            {props.error.message}
        </h4>)
    }

    return (
        <div className="MainHomeDiv">
            <div className="landing">
                <div className="home-wrap">
                    <div className="home-inner">
                    </div>
                </div>
            </div>

            <div className="caption text-center">
                <h1>Welcome To ROST</h1>
                <h3>Online smartphone shop</h3>
                <Link to="/products" className="btn btn-outline-light btn-lg">Get Started</Link>
            </div>
            <Container>
                <HomeCarousel/>
            </Container>
            <Creators/>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { data, loading, err } = state.ProductReducer;
    return { data, loading, err };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page) => dispatch(fetchData(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

//TODO show orders in orders page