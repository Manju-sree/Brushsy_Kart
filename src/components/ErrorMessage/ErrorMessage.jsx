import React from "react";
import "../ErrorMessage/ErrorMessage.css";

export const ErrorMessage = ({ message }) => {
  return <div className="error-msg">{message}</div>;
};