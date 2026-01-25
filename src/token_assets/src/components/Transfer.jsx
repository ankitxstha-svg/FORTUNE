import React, {useState} from "react";
import {token} from "../../../declarations/token";
import {Principal} from "@dfinity/principal";

function Transfer() {

  const [recipientId, setId]= useState("");
  const [amount, setAmount]=useState("");
  const [disableBtn, setdisableBtn] = useState(false);
  const [message, setMessage] = useState("");
  const [msgHidden, setmsgHidden] = useState(true);


  async function handleClick() {

    try {
      setdisableBtn(true);
      const toPrincipal = Principal.fromText(recipientId );
      const transferAmount = BigInt(amount);

      const result = await token.transfer(toPrincipal, transferAmount);
      console.log("Transfer result: ", result);
      setmsgHidden(false);
      setMessage(result);
      setdisableBtn(false);

      
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
          <button id="btn-transfer" onClick={handleClick} disabled = {disableBtn}>
            Transfer
          </button>
        </p>
        <p hidden = {msgHidden}>{message}</p>
      </div>
    </div>
  );
}

export default Transfer;
