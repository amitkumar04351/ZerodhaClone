import React from "react";

function Hero() {
  return (
    <div className="container mb-5 border-bottom">
      <div className="row text-center mt-5 p-5">
        <h1>Zerodha Products</h1>
        <h5 className=" text-muted mt-3 mb-4 fs-4">Sleek, modern, and intuitive trading platforms</h5>
        <p className="mb-5 fs-5">
          Check out our
          <a href="#" className="text-decoration-none">
            {" "}
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
