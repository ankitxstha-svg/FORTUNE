import React, {useState} from "react";
import {token} from "../../../declarations/token";
import {Principal} from "@dfinity/principal";

function Transfer() {

  const [recipientId, setId]= useState("");
  const [amount, setAmount]=useState("");


  async function handleClick() {

    try {
      const toPrincipal = Principal.fromText(recipientId);
      const transferAmount = BigInt(amount);

      const result = await token.transfer(toPrincipal, transferAmount);
      console.log("Transfer result: ", result);

      
    } catch (error) {
      console.error("Transfer Failed: ", error);
      
    };
  };

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value = {recipientId}
                onChange = { (e) => {setId(e.target.value)}}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value = {amount}
                onChange = {(e)=>{ setAmount(e.target.value)}}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
