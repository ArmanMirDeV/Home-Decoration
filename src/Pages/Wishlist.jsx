import React, { useEffect, useState } from 'react';

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);
    const [sortOrder, setSortOrder] = useState('none')

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('Wishlist'))

        if (savedList) setWishlist(savedList)
    }, [])


    const sortedItem = (
        () => {
            if (sortOrder === 'price-asc') {
                return [...wishlist].sort((a, b) => a.price - b.price)
            }
            else if (sortOrder === 'price-desc') {
                return [...wishlist].sort((a, b) => b.price - a.price)
            }
            else {
                return wishlist
            }
        }
    )()



    return (
        <div className='space-y-6 ' >
            <div className='flex justify-between py-5 items-center ' >
                <h1
                    className='text-3xl font-semibold' >
                    <span>Wishlist </span>
                    <span className='text-sm text-gray-600' >({sortedItem.length}) Products Found</span>
                </h1>

                <label className='form-control w-full max-w-xs'>
                    <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                        <option value="None">Sort By Price</option>
                        <option value="price-asc">Low-&gt;High</option>
                        <option value="price-desc">High-&gt;Low</option>

                    </select>
                </label>

            </div>

            <div className='space-y-3'>
                {
                    sortedItem.map(p =>
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