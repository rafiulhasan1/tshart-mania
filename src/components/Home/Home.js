import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([])

    const addToCart = tshirt => {
        const exists = cart.find(fs => fs._id === tshirt._id);
        if (exists) {
            alert('T Shirt Alrady Exisis')
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            // alert('Added Done')
        }
    }

    const removeToCart = tshirt => {
        const reamning = cart.filter(ts => ts._id !== tshirt._id)
        setCart(reamning)
    }

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <TShirt key={tshirt._id} tshirt={tshirt} addToCart={addToCart}></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} removeToCart={removeToCart}></Cart>
            </div>
        </div>
    );
};

export default Home;