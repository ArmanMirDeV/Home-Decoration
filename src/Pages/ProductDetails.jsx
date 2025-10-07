import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {

    const { id } = useParams()

    const { products, loading } = useProducts()
    // console.log(products)


    const product = products.find(p => p.id === Number(id));
    console.log(product);
    if (!product) {
        return <p>Product not found.</p>;
    }


    if (loading) return <p>Loading....</p>

    const { name, image, material, price, description, category, dimension } = product;



    return (
        <div className="card bg-base-100 border shadow-sm">
            <figure className='h-84 overflow-hidden' >
                <img className='w-full object-cover'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='font-semibold text-pink-600' >
                    <p>Category: {category}</p>
                    <p>Dimension: {dimension}</p>
                    <p>{description}</p>
                    <p>Material: {material}</p>
                    <p>Price: $ {price} </p>
                </div>
                <div className="card-actions justify-between mt-2">
                    <button className="btn btn-active">Add to Wishlist</button>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;