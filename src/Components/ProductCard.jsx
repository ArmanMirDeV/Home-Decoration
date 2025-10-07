import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({product}) => {

    // console.log(product);
    
    const {id, name, image, material, price} = product;
    return (
        <div className="card bg-base-100 border shadow-sm hover:scale-105 transition ease-in-out">
            <figure className='h-72 overflow-hidden' >
                <img className='w-full object-cover'
                    src={image}
                    alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Material: {material}</p>             
                <p>Price: $ {price} </p>
                <div className="card-actions justify-between mt-2">
                    <Link to={`/product/${id}`} className="btn btn-active">Details</Link>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;