import React from 'react'

export default function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addtoCart = Function.prototype,
  } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
          <button
            className='btn'
            onClick={() => addtoCart(id, name, price)}
          >
            Купить
          </button>
          <span className='right' style={{fontSize: "1.7rem"}}>{price} грн</span>
      </div>
    </div>
  )
}
