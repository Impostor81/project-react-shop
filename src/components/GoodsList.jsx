import React from 'react';
import GoodsItem from './GoodsItem';


export default function GoodsList(props) {
  const {goods = [], addtoCart = Function.prototype} = props;

  if (!goods.length) {
    return <h3>Здесь ничего нет</h3>
  }

  return (
    <div className='goods'>
      {goods.map(item => (<GoodsItem key={item.id} {...item} addtoCart={addtoCart}/>))}
    </div>
  )
}
