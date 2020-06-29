import React from "react";
import "./Error.css";

const Error = ({ message }) => {
  return <div className="error-message">{message}</div>;
};

export default Error;
