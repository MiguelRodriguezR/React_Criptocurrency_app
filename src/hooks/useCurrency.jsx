import React, { Fragment, useState } from "react";
import './useCurrency.css'

const useCurrency = (label, intialState, options) => {
  const [state, updateState] = useState(intialState);

  const select = () => (
    <Fragment>
      <label htmlFor="" className="lavel"> {label} </label>
      <select data-testid="select-currency" name="" id="" onChange={(e) => updateState(e.target.value)} value={state}>
        <option value=""> - Select - </option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </Fragment>
  );

  return [state, select, updateState];
};

export default useCurrency;
