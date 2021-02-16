import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}] =useStateValue();
    
    return (
        
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__ad" src="https://grapevineevents.ca/wp-content/uploads/2016/09/Grapevine_SHOP_Banner.png" alt=" " />
        
        {basket?.length === 0 ? (
            <div>
                <h2 className="checkout__title">Oops your card is empty.</h2>
                <p>You have no items in your card. To buy one or moe item, click "Click add card" next to the item.</p>
                </div>
         ) : (
             <div>
             <h2 className="checkout__title">Your Card</h2>

{/* List of checkout card product */}
            
            {basket?.map(item => (
         <CheckoutProduct
         id={item.id}
         title={item.title}
         image={item.image}
         price={item.price}
         rating={item.rating}
         />
            ))}
            </div>
         )}
        </div>
        {basket.length > 0 && (
             <div className="checkout__right">

              <h1 className="checkout__subtotal">Subtotal</h1>
                <Subtotal />
             </div>
        )}
        </div>
    );
}

export default Checkout
