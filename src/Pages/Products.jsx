import React from 'react';
import useProducts from '../Hooks/useProducts';

const Products = () => {
    const {products} = useProducts()
    return (
        <div>
            <h1>This is Products: {products.length} </h1>
        </div>
    );
};

export default Products;