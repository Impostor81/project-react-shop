import React from 'react'

export default function Cart(props) {
  const {quantity = 0, handleCartShow = Function.prototype} = props;

  return (
    <div className='cart purple darken-1 white-text' onClick={handleCartShow}>
      <i className="small material-icons">
        shopping_cart
      </i>
      {quantity ? <span className='cart-quantity'>{quantity}</span> : null}
    </div>
  )
}
