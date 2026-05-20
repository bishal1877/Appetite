import React, { useContext } from "react";
import "./PlaceOrder.css";
import { Storecontext } from "../../context/Store";
import { useState } from "react";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [info, setinfo] = useState({
    firstname: "a",
    lastname: "b",
    email: "c@gmail.com",
    street: "df",
    city: "df",
    state: "hg",
    pin: 345,
    phone: "fgt",
    ctry: "IND",
  });
  const { gettotalamt,cartitem} = useContext(Storecontext);
let product=cartitem;
  const change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setinfo((prev) => ({ ...prev, [name]: value }));
  };

  let total = gettotalamt();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        flexDirection: "column",
        padding: "10px",
        gap: "10px",
      }}
    >
      <p className="title">Delivery Information</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
          width: "100%",
          borderRadius: "7px",
          boxShadow:
            "0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)",
          padding: "20px",
        }}
      >
        <form
          className="order"
          action="http://localhost:3000/create-checkout-session"
          method="POST"
        >
          {console.table(product)}
          <input
            type="hidden"
            name="product"
            value={JSON.stringify(cartitem)}
            readOnly
          />
          <div className="order-left">
            <div className="multifield">
              <input
                value={info.firstname}
                onChange={change}
                name="firstname"
                type="text"
                placeholder="First Name"
              />

              <input
                value={info.lastname}
                onChange={change}
                name="lastname"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              value={info.email}
              onChange={change}
              name="email"
              type="email"
              placeholder="Email address"
            />
            <input
              value={info.street}
              onChange={change}
              name="street"
              type="text"
              placeholder="Street"
            />

            <div className="multifield">
              <input
                value={info.city}
                onChange={change}
                name="city"
                type="text"
                placeholder="City"
              />
              <input
                value={info.state}
                onChange={change}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="multifield">
              <input
                required
                value={info.pin}
                onChange={change}
                name="pin"
                type="number"
                placeholder="Pin Code"
              />
              <input type="text" placeholder="Country" value={info.ctry} />
            </div>
            <input
              required
              value={info.phone}
              onChange={change}
              name="phone"
              type="text"
              placeholder="Phone"
            />
            <button type="submit">Procced to payment</button>
          </div>
        </form>
        <div className="order-right">
          <div className="carttotal">
            <h1 style={{ textDecoration: "underline", fontWeight: "100" }}>
              Cart Total
            </h1>
            <div>
              <div className="carttotal-detail">
                <p>Subtotal</p>
                <p>$ {total}</p>
              </div>
              <hr />
              <div className="carttotal-detail">
                <p>Delivery fee</p>
                <p>$ {total > 0 ? 2 : 0}</p>
              </div>
              <hr />
              <div className="carttotal-detail">
                <b>Total</b>
                <b>$ {total ? total + 2 : 0}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
