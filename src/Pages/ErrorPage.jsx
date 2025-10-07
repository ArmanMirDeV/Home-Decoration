import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    return <div> <h2>Error</h2> {error.message}</div>;
};

export default ErrorPage;