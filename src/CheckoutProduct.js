import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, title, image, price, rating}) {
      
    const [{ basket }, dispatch] = useStateValue();
    const RemoveFromBasket =() =>{
        // Remove item from basket........

        dispatch({
            type:"REMOVE_FROM_BASKET",
            id: id,
        });

    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
        <span>$</span>
        <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
        {
            Array(rating)
            .fill()
            .map((_) =>(
                <p>&#9733;</p>
            ))
        }
            </div>
            <button onClick={RemoveFromBasket}>Remove this item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
