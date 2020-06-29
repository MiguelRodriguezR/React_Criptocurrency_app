import React, { useEffect, useState } from "react";
import "./Form.css";
import useCurrency from "../../hooks/useCurrency";
import useCriptoCurrency from "../../hooks/useCriptoCurrency";
import Axios from "axios";
import Error from "../error/Error";

const Form = ({ saveCriptoCurrency, saveCurrency }) => {
  const [criptoList, saveCriptoList] = useState([]);
  const [error, saveError] = useState(false);

  const CURRENCIES = [
    { code: "USD", name: "USA Dollar" },
    { code: "COP", name: "Colombian Peso" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "UK Pound" },
  ];

  const [currency, SelectCurrency] = useCurrency(
    "Select Currency",
    "",
    CURRENCIES
  );

  const [criptoCurrency, SelectCriptoCurrency] = useCriptoCurrency(
    "Select CriptoCurrency",
    "",
    criptoList
  );

  useEffect(() => {
    const getAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const result = await Axios.get(url);
      saveCriptoList(result.data.Data);
    };

    getAPI();
  }, []);

  const getPrice = (e) => {
    e.preventDefault();
    if (currency === "" || criptoCurrency === "") {
      saveError(true);
      return;
    }
    saveError(false);

    saveCurrency(currency);
    saveCriptoCurrency(criptoCurrency);
  };

  return (
    <form action="" onSubmit={getPrice}>
      {error ? <Error message={"All fields are required"}></Error> : null}
      <SelectCurrency></SelectCurrency>
      <SelectCriptoCurrency></SelectCriptoCurrency>
      <button className="button" type="submit">
        Get Price
      </button>
    </form>
  );
};

export default Form;
