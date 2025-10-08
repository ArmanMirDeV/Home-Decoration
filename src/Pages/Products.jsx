import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import { Link } from 'react-router';
import SkeletonLoader from '../Components/SkeletonLoader';

const Products = () => {
    const { products, loading } = useProducts();
    const [search, setSearch] = useState('');
    const term = search.trim().toLowerCase()

    const searchedProducts = term ? products.filter(product => product.name.toLowerCase().includes(term)) : products;


    return (
        <div>
            <div className='flex justify-between py-5 items-center ' >
                <h1
                    className='text-3xl font-semibold' >
                    <span>All Products </span>
                    <span className='text-sm text-gray-600' >({searchedProducts.length}) Products Found</span>
                </h1>
                <label className="input">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type={'search'}
                        placeholder="Search Products" />
                </label>
            </div>
            {
                loading ? <SkeletonLoader count={16} /> : (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' >
                    {
                        searchedProducts.map(product =>
                            <ProductCard product={product} key={product.id} ></ProductCard>
                        )
                    }
                </div>)
            }
        </div>
    );
};

export default Products;