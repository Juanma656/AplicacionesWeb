import React from 'react';
import "./Cart.css";

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) =>{

    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
        );

    return(
        <div className="cart-items">
            <h2 className='cart-item-headers'>Productos en el carrito</h2>
            <div className="clear-cart">
                {cartItems.length >= 1 &&(
                    <button className="clear-cart-button" onClick={handleCartClearance}>
                        Limpiar 
                    </button>
                )}
            </div>
        {cartItems.length === 0 && 
        (<div className='cart-items-empty'>No se han agregado productos al carrito.</div>
        )}

        <div>
            {cartItems.map((item)=>(
                <div key = {item.id} className='cart-items-list'>

                    <img src = {item.image}
                     alt = {item.name}
                    />
                    <div className='cart-items-name'>{item.name}</div>
                    <div className='cart-items-function'>
                        <button className='cart-items-add' 
                        onClick={()=> handleAddProduct(item)}
                        >
                            +
                        </button>
                        <button className='cart-items-remove'
                        onClick={()=> handleRemoveProduct(item)}
                        >
                            -
                        </button>
                    </div>
                    <div className="cart-items-price">
                        {item.quantity} * {item.price}
                    </div>
                </div>
            ))}
        </div>
        <div className='cart-items-total-price-name'>
                Precio total
            <div className='cart-items-total-price'> ${totalPrice}</div>
        </div>
        </div>
    );
}
 export default Cart