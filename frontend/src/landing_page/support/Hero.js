import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Ticket</a>
      </div>
      <div className="row p-5 ">
        <div className="col-6 p-5  ">
          <h1 className="fs-3">Search foe an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg:How do i activate F&O" /><br/>
          <a href="" className="mx-3">Track account opening</a>
          <a href="" className="mx-3">Track segment activation</a>
          <a href="" className="mx-3">Intraday margins</a>
          <a href="">Kite User manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="">Current Take   Over and Delisting - march 2026</a></li>
            <li><a href="">Latest intraday Leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
