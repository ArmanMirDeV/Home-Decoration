import React from 'react';
import { Link, useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';

const Home = () => {
    const products = useLoaderData();
    const featuredProducts = products.slice(0, 6)
    console.log(products);

    return (
        <div>
            <div className='flex justify-between py-5 items-center ' >
                <h1 className='text-3xl font-semibold ' >Featured Products</h1>
                <Link className='btn btn-outline text-blue-500' to='/products' >View More Products</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                {
                    featuredProducts.map(product =>
                        <ProductCard product={product} key={product.id} ></ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default Home;