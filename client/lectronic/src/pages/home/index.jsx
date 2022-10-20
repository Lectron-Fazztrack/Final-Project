import React from "react";
import CardAdmin from "../../components/card/cardAdmin";
import CardHistory from "../../components/card/cardHistory";
import CardOriginal from "../../components/card/cardOriginal";

function Home() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-sm-12">
            <CardOriginal />
          </div>
          <div className="col-xl-4 col-lg-6 col-sm-12">
            <CardOriginal />
          </div>
          <div className="col-xl-4 col-lg-6 col-sm-12">
            <CardOriginal />
          </div>
        </div>
        <div className="row">
          <CardAdmin />
        </div>
        <div className="row">
          <CardHistory />
        </div>
      </div>
    </div>
  );
}

export default Home;
