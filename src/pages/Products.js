import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import MainProducts from '../components/MainProducts';
import { fetchData } from '../redux/actions';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function Products(props){

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
        <Container style={{marginTop : "80px"}}>
            <MainProducts data = {props.data}/>
        </Container>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);