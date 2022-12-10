import React from "react";
import "./container.css";
import TopSect from "./TopSect";
// import FoodCont from "./FoodCont";
import Categories from "./Categories";

function Container() {
  return (
    <div className="container">
      <TopSect />
      <Categories />
    </div>
  );
}

export default Container;
