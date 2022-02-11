import React from 'react'

export default function CartTableItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromCart = Function.prototype,
    changeQuantity = Function.prototype
  } = props;

  return (
    <tr className="collection-item" >
      <td>{name}</td>
      <td>
        <span className='change-quantity'
          onClick={() => changeQuantity('sub', id)}>
            -
          </span>
          {' '}
          {quantity}
          {' '}
          шт
          {' '}
        <span className='change-quantity' onClick={() => changeQuantity('add', id)}>
          +
        </span>
      </td>
      <td>{price} грн</td>
      <td>
        <span className="secondary-content" onClick={() => removeFromCart(id)}>
         <i className="material-icons cart-delete">close</i>
       </span>
      </td>
    </tr>
  )
}
