import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt , addToCart}) => {
    const {name , picture , price} = tshirt;
    return (
        <div className='tshirts'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price :{price}$</p>
            <button onClick={() => addToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;