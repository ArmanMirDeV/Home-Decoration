import React from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router';

const Products = () => {
    const {products} = useProducts()
    return (
        <div>
            <div className='flex justify-between py-5 items-center ' >
                <h1 className='text-3xl font-semibold ' >All Products</h1>
                <button className='btn btn-outline text-blue-500' to='/products' >Search</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    products.map(product =>
                        <ProductCard product={product} key={product.id} ></ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default Products;