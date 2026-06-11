import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5 text-muted">
          <img
            src="media\Images\zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ width: "40%" }}
            className="mb-3"
          />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5 text-muted">
          <img
            src="media/Images/sensibullLogo.svg"
            alt="sensibullLogo"
            style={{ width: "40%" }}
            className="mb-4"
          />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 mt-5 text-muted">
          <img
            src="media/Images/goldenpiLogo.png"
            alt="goldenpiLogo"
            style={{ width: "40%" }}
            className="mb-4"
          />
          <p>Bounds trading platform</p>
        </div>
        <div className="col-4 mt-5 mb-5 text-muted">
          <img
            src="media/Images/streakLogo.png"
            alt="streakLogo"
            style={{ width: "40%" }}
            className="mb-3"
          />
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5 text-muted">
          <img
            src="media/Images/smallcaseLogo.png"
            alt="smallcaseLogo"
            style={{ width: "50%" }}
            className="mb-4"
          />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5 mb-5 text-muted">
          <img
            src="media/Images/dittoLogo.png"
            alt="dittoLogo"
            style={{ width: "40%" }}
            className="mb-3"
          />
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:'20%',margin:'0 auto'}}>Sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
