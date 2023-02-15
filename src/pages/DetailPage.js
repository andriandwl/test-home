import React from "react";
import { Link } from "react-router-dom";

export default function DetailPage() {
  const bank = JSON.parse(localStorage.getItem("banks"));

  console.log(bank);
  return (
    <div className="container border-1 border p-4 mt-4">
      <div key={bank.id}>
        <h3>{bank.bank_name}</h3>
        <p>Account Number : {bank.account_number}</p>
        <p>Iban : {bank.iban}</p>
        <p>Routing Number : {bank.routing_number}</p>
        <p>Swift BIC : {bank.swift_bic}</p>
        <p>
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}
