import React, {useState} from "react";
import {token, createActor, canisterId} from "../../../declarations/token";
import { AuthClient } from "@dfinity/auth-client";

function Faucet() {

  const [btnDisable, setBtnDisable] = useState(false);
  const [msgOnBtn, setMsgOnBtn] = useState("gimme gimme");

  async function handleClick(event) {
     setBtnDisable(true);

      const authClient = await AuthClient.create();
      const identity = await authClient.getIdentity();

      const authenticatedCanister = createActor(canisterId, {
        agentOptions:{
          identity
        }
      })

     const msg = await authenticatedCanister.payOut();
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
