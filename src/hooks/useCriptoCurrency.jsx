import React, { Fragment, useState } from "react";
import './useCurrency.css'

const useCriptoCurrency = (label, intialState, options) => {
  const [state, updateState] = useState(intialState);

  const select = () => (
    <Fragment>
      <label htmlFor="" className="lavel"> {label} </label>
      <select data-testid="criptoSelect" name="" id="" onChange={(e) => updateState(e.target.value)} value={state}>
        <option value=""> - Select - </option>
        {options.map((option) => (
          <option data-testid="criptoOption" key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return [state, select, updateState];
};

export default useCriptoCurrency;
