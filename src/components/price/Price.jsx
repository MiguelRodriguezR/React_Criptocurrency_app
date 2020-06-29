import React from "react";
import './Price.css'

const Price = ({ price }) => {
  if (Object.keys(price).length === 0) return null;

  return (
    <div>
      <p className="price">
        Price is: <span>{price.PRICE}</span>
      </p>
      <p className='info'>
        Higher Price of the day: <span>{price.HIGHDAY}</span>
      </p>
      <p className='info'>
      Lower Price of the day: <span>{price.LOWDAY}</span>
      </p>
      <p className='info'>
        Last 24 hours variation: <span>{price.CHANGEPCT24HOUR}%</span>
      </p>
      <p className='info'>
        Last update <span>{price.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Price;
