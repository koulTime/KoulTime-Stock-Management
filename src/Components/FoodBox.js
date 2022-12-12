import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IncDecCounter from "./IncDecCounter";

const notify = () => {
  toast.success("Item has been added to cart", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

function FoodBox({ item }) {
  // const handleClick = async () => {
  //   alert("Item has been added to cart");
  // };

  return (
    <div className="details">
      <img src={item.img} alt="" className="details-img" />
      <div className="food-details">
        <div>
          <p>Quantity: {item.count}</p>
        </div>
      </div>
      <div className="food-name">
        <h2>{item.title}</h2>
      </div>

      <div className="cart-btn">
        <IncDecCounter />
      </div>
      <ToastContainer />
    </div>
  );
}

export default FoodBox;
