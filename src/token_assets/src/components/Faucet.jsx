import React, {useState} from "react";
import {token} from "../../../declarations/token";

function Faucet() {

  const [btnDisable, setBtnDisable] = useState(false);
  const [msgOnBtn, setMsgOnBtn] = useState("gimme gimme");

  async function handleClick(event) {
     setBtnDisable(true);
     const msg = await token.payOut();
     setMsgOnBtn(msg);
     setBtnDisable(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled = {btnDisable}>
          {msgOnBtn}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
