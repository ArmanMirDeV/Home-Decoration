import React, { useEffect, useState } from 'react';

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('Wishlist'))

        if (savedList) setWishlist(savedList)
    }, [])

    return (
        <div className='space-y-6 ' >
            <div className='flex justify-between py-5 items-center ' >
                <h1
                    className='text-3xl font-semibold' >
                    <span>Wishlist </span>
                    <span className='text-sm text-gray-600' >({wishlist.length}) Products Found</span>
                </h1>

                <button className='btn btn-primary' >Sort</button>

            </div>

            <div className='space-y-3'>
                {
                    wishlist.map(p =>
                        <div key={p.id} className='card card-side bg-base-100 shadow border'>
                            <figure>
                                <img
                                    className='w-40 h-28 object-cover'
                                    src={p.image}
                                    alt={p.name}
                                />
                            </figure>
                            <div className='card-body'>
                                <h3 className='card-title'>{p.name}</h3>
                                <p className='text-base-content/70'>{p.category}</p>
                            </div>
                            <div className='pr-4 flex items-center gap-3'>
                                <div className='font-semibold'>${p.price}</div>
                                <button

                                    className='btn btn-outline'
                                >
                                    Remove
                                </button>
                            </div>
                        </div>

                    )
                }
            </div>


        </div>
    );
};

export default Wishlist;