import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([]);
    const [sortOrder, setSortOrder] = useState('none')

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('Wishlist'))

        if (savedList) setWishlist(savedList)
    }, [])

    if(!wishlist.length) return <p className='font-black text-3xl text-red-300'>Please Select For Your Wishlist</p>

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



    const handleRemove = (id) => {

        const existingList = JSON.parse(localStorage.getItem('Wishlist'))

        let updatedList = existingList.filter(p => p.id !== id)
        // for ui instance update
        setWishlist(updatedList)


        localStorage.setItem('Wishlist', JSON.stringify(updatedList))


    }

    // generate chart data

    const totalsByCategory = {}
    wishlist.forEach(product => {
        const category = product.category

        totalsByCategory[category] = 
        (totalsByCategory[category] || 0) + product.price
    })

    const chartData = Object.keys(totalsByCategory).map(category => ({
        category,
        total: totalsByCategory[category] 
    }))


console.log(chartData);


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

                                <button onClick={() => handleRemove(p.id)} className='bt btn-outline hover:bg-pink-200 rounded-lg p-2 cursor-pointer'> Remove</button>
                            </div>
                        </div>

                    )
                }
            </div>


            {/* chart */}

            <div className='space-y-3'>
                <h3 className='text-xl font-bold'> Wishlist Summery</h3>
                <div className='bg-base-100 border rounded-xl h-80 p-4'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="total" fill='#82ca9d' activeBar={<Rectangle fill="gold" stroke="purple" />} />
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>

        </div>
    );
};

export default Wishlist;


