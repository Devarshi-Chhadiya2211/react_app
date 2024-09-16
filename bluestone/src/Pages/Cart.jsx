import React, { useEffect, useState } from 'react';
import '../assets/cart.css';

function Cart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mock-server-app-3ssy.onrender.com/cart')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div>
        <section id="details_of_cart">
          <div id="add_to_cart_product">
            <h1 id="nc-title">My Shopping Cart</h1>
            {data.length === 0 ? (
              <p>Your cart is empty!</p>
            ) : (
              data.map((el) => (
                <div key={el.id} id="ring_details_remove">
                  <div>
                    <img src={el.image} alt="ring_image" width='200px' height='200px'/>
                  </div>

                  <div id="first_box">
                    <div>
                      <div>
                        <div className="product-title">
                          <a target="_blank" href="#" title={el.name}>
                            {el.name}
                          </a>
                          <span className="product-code">Product Code: {el.productCode}</span>
                        </div>
                        <div>
                          <p>
                            <span className="old-price">
                              <strike>₹{el.strikeoffprice}</strike>
                            </span>
                            <span className="new-price">₹{el.price}</span>
                          </p>
                          <p className="offer-info-block">(25% off on diamond price)</p>
                        </div>
                      </div>
                      <div className="make_ring_size">
                        {/* <div className="first-divs">Ring Size</div> */}
                        <div className="make_ring_size">
                          <div>
                            <div className="select-box">
                              <div className="options-container">
                                {/* Replace with actual ring sizes */}
                                <div className="option">
                                  <input type="radio" className="radio" id="size" name="category" />
                                  <label htmlFor="ring">3</label>
                                </div>
                                <div className="option">
                                  <input type="radio" className="radio" id="size1" name="category" />
                                  <label htmlFor="ring1">4</label>
                                </div>
                                {/* Add more size options as required */}
                              </div>
                              <div className="selected">
                                <span>{el.selectedSize || 'Select Size'}</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <span>Quantity</span>
                            <select id="select-opt" defaultValue={el.quantity}>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              {/* Add more quantities as needed */}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="make_ring_size">
                        <div className="metal-part">Metal</div>
                        <div className="data-part">{el.metalDetails}</div>
                      </div>
                      <div className="make_ring_size">
                        <div className="metal-part">Stone</div>
                        <div className="data-part">{el.stoneDetails}</div>
                      </div>
                    </div>
                    <div className="make_ring_size choice-to">
                      <div>Remove</div>
                      <div>Move To Wishlist (<a href="#">Need to log in</a>)</div>
                    </div>
                  </div>
                </div>
              ))
            )}

            <div id="insurance-money">
              <div>
                <span>
                  <i className="fa-solid fa-circle-check"></i> 30-Day Money Back
                </span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-circle-check"></i> Eligible for Lifetime exchange & Buy back
                </span>
              </div>
              <div>
                <span>
                  <i className="fa-solid fa-circle-check"></i> Free & Insured Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div id="place_order1">
            <h2 id="nt-title">Order Summary</h2>
            <div className="payment-summary">
              <span>Total ({data.length} items)</span>
              <span>₹{data.reduce((total, el) => total + el.price * el.quantity, 0)}</span>
            </div>
            <div className="payment-summary">
              <span>Total Payable</span>
              <span>₹{data.reduce((total, el) => total + el.price * el.quantity, 0)}</span>
            </div>
            <div className="payment-summary">
              <span>You Save ₹{data.reduce((total, el) => total + (el.strikeoffprice - el.price), 0)}</span>
            </div>
            <div className="payment-summary">
              <span>Gift Message (optional)</span>
              <span>
                <i className="fa-solid fa-gift"></i> <a href="#">Add</a>
              </span>
            </div>
            <div id="btns1">
              <button onClick={() => alert('Proceeding to payment...')}>PLACE ORDER</button>
            </div>
            <p>I have a voucher code / gift card</p>
            <p id="chat_us">
              Any Questions?
              <br />
              Please call us at <b>1800-419-0066</b> or <a href="#">Chat with us</a>
            </p>
          </div>
        </section>

        {/* Footer Section */}
        <section>
          <div id="footer-place-order">
            {/* Footer content goes here */}
          </div>
        </section>
      </div>
    </>
  );
}

export default Cart;
