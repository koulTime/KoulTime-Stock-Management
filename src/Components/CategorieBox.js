import React from "react";
import { Link } from "react-router-dom";
import "./CategorieBox.css";
// import "bootstrap/dist/css/bootstrap.css";

const CategorieBox = ({ category }) => {
  return (
    <>
      <div className="details">
        <Link to={category.link} className="var-btn">
          <div className="row">
            <div className="col-md-6 categorie-image">
              <img src={category.img} alt="" className="details-img" />
            </div>
            {/* <div className="col-md-6">Mahdi</div> */}
            {/* <img src="" alt="" className="details-img" /> */}
            <div className="col-md-6 categorie-name">
              <h3>{category.title}</h3>
              <ul class="pt-1 mt-1">
                {category.sub_categories.map((item) => (
                  <li class="pt-1" key={item}>
                    <span class="text-xs text-gray-400 hover:text-emerald-600">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          stroke-linecap="square"
                          stroke-miterlimit="10"
                          stroke-width="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CategorieBox;
