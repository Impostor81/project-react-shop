import React from 'react';
import CartTableItem from './CartTableItem';

export default function CartListTable(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromCart = Function.prototype,
    changeQuantity = Function.prototype
  } = props;

  const totalPrice = order.reduce((sum, el) => sum + (el.price * el.quantity), 0);

  return (
    <table className="collection cart-table z-depth-5">
      <caption>
        Корзина
        <i className="material-icons cart-close" onClick={handleCartShow}>close</i>
        </caption>
      <thead className="collection-item active purple lighten-1 white-text">
        <tr>
        <td>Название</td>
        <td>Количество</td>
        <td className='price-column'>Цена</td>
        <td></td>
        </tr>
      </thead>
      <tbody>
      {order.length
          ? order.map(item => <CartTableItem key={item.id} {...item} removeFromCart={removeFromCart} changeQuantity={changeQuantity} />)
          : (<tr>
            <td className="collection-item" colSpan={4}>Корзина пуста</td>
            </tr>)
        }
      </tbody>
      <tfoot className="collection-item active purple lighten-1 white-text">
        <tr>
          <td colSpan={2}>Общая стоимость:</td>
          <td>{totalPrice} грн</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan={4} className="footer-btn">
            <button className='btn btn-buy'>
              Купить
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}