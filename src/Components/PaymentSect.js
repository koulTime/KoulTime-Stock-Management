import React from "react";
import { IoIosAddCircle } from "react-icons/io";


function PaymentSect() {

  return (
    <>
      <div className="payment">
        <div className="name">
          <h4>Item</h4>
          <p>Quantity</p>
          <p></p><p></p>
        </div>

        <div className="price">


          <article>
            <div className="pay">
              <div>
                <b>Bread</b>
                <p>$1.50</p>
              </div>
              <p className="qty-box">1</p>
              <span className="trash-box" title="add"><IoIosAddCircle /></span>
            </div>

          </article>


          <article>
            <div className="pay">
              <div>
                <b>Steak</b>
                <p>$2.78</p>
              </div>
              <p className="qty-box">2</p>
              <span className="trash-box" title="add"><IoIosAddCircle /></span>
            </div>
          </article>



          <article>
            <div className="pay">
              <div>
                <b>Pasta</b>
                <p>$2.50</p>
              </div>
              <p className="qty-box">2</p>
              <span className="trash-box" title="add"><IoIosAddCircle /></span>
            </div>

          </article>


          {/*<figure>
            <div className="last">
              <p className="space">Discount</p>
              <p>Total</p>
            </div>
            <div className="last">
              <p className="space">$0</p>
              <p>$14.84</p>
            </div>
          </figure>*/}



          {/* <figure>
            <div className="last">
              <p className="space">Discount</p>
              <p>Sub-total</p>
            </div>
            <div className="last">
              <p className="space">$0</p>
              <p>{total()}</p>
            </div>
          </figure> */}




        </div>
      </div>
    </>
  );
}

export default PaymentSect;
