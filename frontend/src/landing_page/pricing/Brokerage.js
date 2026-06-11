import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 border-top">
        <div className="col-8">
          <a href="#" style={{textDecoration:"none"}}><h1 className="text-center fs-5 mb-4">Brokerage Calculator</h1></a>
          <ul style={{lineHeight:"2.5" , fontSize:"14px"}} className="text-muted">
            <li>
              Call & trade and RMS auto-squareoff:Additional charges of{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>50 + GST per order.
            </li>
            <li>Digital contract notes will be sent via email.</li>
            <li>
              physical copies of contract notes,if required, shall be charge{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>20 per contract
              note.Couries charges apply.{" "}
            </li>
            <li>
              For NRI account (non-PSI),0.5% or{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>100 per extected order
              for equity (whichever is lower)
            </li>
            <li>
              For NRI account (PSI),0.5% or{" "}
              <i class="fa fa-inr" aria-hidden="true"></i>200 per extected order
              for equity (whichever is lower)
            </li>
            <li>
              If the account is in debit balance, any order place will be
              charged <i class="fa fa-inr" aria-hidden="true"></i>40 executed
              order instead of <i class="fa fa-inr" aria-hidden="true"></i>20
              per executed order
            </li>
          </ul>
        </div>
        <div className="col-4">
            <a href="#" style={{textDecoration:"none"}}><h1 className="text-center fs-5">List of charges</h1></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
