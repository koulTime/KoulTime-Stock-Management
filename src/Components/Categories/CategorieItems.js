import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../Categories";
import FoodBox from "../FoodBox";
import PaymentSect from "../PaymentSect";
import TopSect from "../TopSect";

const CategorieItems = ({ content }) => {
  return (
    <>
      <div className="container">
        <TopSect />
        <div className="foodcontainer">
          <div className="left-side">
            <div className="cards">
              <div className="all">
                <div className="varieties">
                  <Link to="/" className="var-btn">
                    All
                  </Link>
                  {categories.map((category) => (
                    <Link
                      to={category.link}
                      className="var-btn"
                      key={category.id}
                    >
                      {category.title}
                    </Link>
                  ))}
                </div>
              </div>

              <main>
                {content.map((item) => (
                  <FoodBox item={item} key={item.id} />
                ))}
              </main>
            </div>
          </div>
          <div className="right-side">
            <PaymentSect />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorieItems;
