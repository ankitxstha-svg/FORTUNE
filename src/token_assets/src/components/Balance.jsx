import React, { useState } from "react";
import {Principal} from '@dfinity/principal';
import {token} from '../../../declarations/token';

function Balance() {

  const [principalId, setPrincipalId] = useState("");
  const [balanceResult, setBalanceResult] = useState("");
  
  async function handleClick() {
    const principal = Principal.fromText(principalId);
    const balance = await token.balanceOf(principal);

    setBalanceResult(balance.toLocaleString());
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value = {principalId}
          onChange = {(e) => {setPrincipalId(e.target.value)}}

        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p>This account has a balance of {balanceResult}.</p>
    </div>
  );
}

export default Balance;
