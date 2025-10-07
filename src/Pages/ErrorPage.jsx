import React from 'react';
import { useRouteError } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    const error = useRouteError();



    return(
    <>
    <Navbar></Navbar>
    <div> <h2>Error</h2> {error.message}</div>;
    <Footer></Footer>
    </>
)



};


export default ErrorPage;