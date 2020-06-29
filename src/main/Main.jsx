import React, { useState, useEffect } from "react";
import "./Main.css";
import imagen from "../cryptomonedas.png";
import Form from "../components/form/Form";
import Axios from "axios";
import Price from "../components/price/Price";
import Spinner from "../components/spinner/Spinner";

const Main = () => {
  const [criptoCurrency, saveCriptoCurrency] = useState("");
  const [currency, saveCurrency] = useState("");
  const [price, savePrice] = useState({});
  const [loading, saveLoading] = useState(false);

  useEffect(() => {
    const getPrice = async () => {
      if (currency === "") return;
      saveLoading(true);
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`;
      const result = await Axios.get(url);
      savePrice(result.data.DISPLAY[criptoCurrency][currency]);
      saveLoading(false);
    };

    getPrice();
  }, [currency, criptoCurrency]);

  return (
    <div className="container">
      <div>
        <img className="image" src={imagen} alt="crip" />
      </div>
      <div>
        <div className="heading"> Instant Cryptocurrency </div>
        <Form
          saveCriptoCurrency={saveCriptoCurrency}
          saveCurrency={saveCurrency}
        ></Form>

        {loading ? <Spinner></Spinner> : <Price price={price}></Price>}
      </div>
    </div>
  );
};

export default Main;
