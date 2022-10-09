import React from 'react';

const Cart = ({cart ,removeToCart }) => {

    let message;
    if(cart.length === 0){
        message = <p>no product seclated</p>
    }
    else{
        message =<p>Thanks For Buying</p>
    }

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
            {
                message
            }
            {cart.length === 3 ? <p> tin jon k gift diba</p> : <p>assa kino</p>}
            {cart.length ==2 && <p>Dobul Item</p>}
        </div>
    );
};

export default Cart;