import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL, API_KEY } from "../config";

import Preloader from './Preloader';
import GoodsList from './GoodsList';
import Cart from './Cart';
import CartListTable from './CartListTable';
import Alert from './Alert';

export default function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [CartShown, setCartShown] = useState(false);
  const [alertName, setAlertName] = useState('');

  useEffect(function getGoods() {
    fetch(API_URL, {headers: {Authorization: API_KEY}})
      .then(response => response.json())
      .then(data => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      })
  }, []);


  const addtoCart = (id, name, price) => {
    const itemIndex = order.findIndex(item => item.id === id);

    if (itemIndex < 0) {
      const newItem = {id, name, price, quantity: 1};
      setOrder([...order, newItem]);
    } else {
        const existedItem = order.find(item => item.id === id);
        existedItem.quantity = existedItem.quantity + 1;
        setOrder([...order]);
      }

    setAlertName(name);
  }

  const removeFromCart = (id) => {
    const newOrder = order.filter(item => item.id !== id);
    setOrder(newOrder);
  }

  const handleCartShow = () => {
    setCartShown(!CartShown);
  }

  const changeQuantity = (key, id) => {
    const item = order.find(item => item.id === id);

    if (key === 'add') {
      item.quantity = item.quantity + 1;
    }

    if (key === 'sub') {
      item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
    }

    setOrder([...order]);
  }

  const closeAlert = () => {
    setAlertName('');
  }

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading
        ? <Preloader />
        : <GoodsList goods={goods} addtoCart={addtoCart} />
      }
      {
        CartShown && <CartListTable
          order={order}
          handleCartShow={handleCartShow} removeFromCart={removeFromCart}
          changeQuantity={changeQuantity}
        />
      }
      {
        alertName && <Alert name={alertName} closeAlert={closeAlert}/>
      }
    </main>
  )
}
