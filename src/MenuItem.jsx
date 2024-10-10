import React from 'react'

const MenuItem = ({img, title, price, desc}) => {
  return (
    <article>
      <img src={img} alt={title} className='img'/>
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  )
}

export default MenuItem