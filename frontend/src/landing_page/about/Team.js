import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center text-muted fs-3">People</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontsize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/Images/amitimages.jpeg"
            alt="Amit"
            style={{ borderRadius: "50%", width: "50%" }}
          />
          <h4 className="mt-3">Amit Kumar</h4>
          <h6>Co-founder & CEO of cloneZerodha</h6>
        </div>
        <div className="col-6 p-3 fs-5      ">
          <p>
            Amit bootstrapped and founded cloneZerodha in 2025 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            cloneZerodha has changed the landscape of the Indian broking
            industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
