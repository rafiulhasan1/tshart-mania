import React from 'react';

const Cart = ({cart ,removeToCart }) => {
    return (
        <div>
            <h2>products Detail</h2>
            <h4>Product Quantity :{cart.length}</h4>
            {
                cart.map(tshirt => <p
                key={tshirt._id} 
                >
                    {tshirt.name}
                    <button onClick={() => removeToCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;