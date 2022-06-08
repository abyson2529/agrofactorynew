import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import "react-bootstrap";
import Header from "../components/header";
import LoginHeader from "../components/login-head";
import "./sample.css";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";

const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token");

const Sample = () => {
  const [cart, setCart] = useState([]);
  const [Load1, setLoad] = useState(0);

  let carttotal = 0;
  var a = [];
  var cartdetails=[];

  async function getSeed(id, cartId, quantity) {
    let data = {
      seedId: id,
    };
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showSeedId",
      data
    );
    if (response2.status == 200) {
      a = cart;
      let b = { ...response2.data.response, cartId: cartId, cquantity: quantity, };
      a.push(b);
      setCart(a);
    }
  }

  async function getFertilizer(id, cartId, quantity) {
    console.log(id)
    
    let data = {
      fertilizerId: id,
    };
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showFertilizerId",
      data
    );
    if (response2.status == 200) {
      a = cart;
      let b = { ...response2.data.response, cartId: cartId , cquantity: quantity,};
      a.push(b);
      console.log(a)
      setCart(a);
    }
  }

  async function getMachinery(id, cartId, quantity) {
    let data = {
      machineryId: id,
    };
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showMachineryId",
      data
    );
    if (response2.status == 200) {
      a = cart;
      let b = { ...response2.data.response, cartId: cartId,  cquantity: quantity, };
      a.push(b);
      setCart(a);
    }
  }

  async function getGrain(id, cartId, quantity) {
    let data = {
      grainId: id,
      
    };
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showGrainId",
      data
    );
    if (response2.status == 200) {
      a = cart;
      let b = { ...response2.data.response, cartId: cartId,  cquantity: quantity, };
      a.push(b);
      setCart(a);
    }
  }

  async function getVege(id, cartId, quantity) {
    let data = {
      vegeId: id,
      
    };
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showVegeId",
      data
    );
    if (response2.status == 200) {
      a = cart;
      let b = { ...response2.data.response, cartId: cartId,  cquantity: quantity, };
      a.push(b);
      setCart(a);
    }
  }

  async function getFruit(id, cartId, quantity) {
    let data = {
      fruitId: id,
    };
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showFruitId",
      data
    );
    if (response2.status == 200) {
      a = cart;
      let b = {
        ...response2.data.response,
        cartId: cartId,
        cquantity: quantity,
      };
      a.push(b);
   
      setCart(a);
    }
  }

  async function getCart() {
    let arr = [];
    const userId = window.localStorage.getItem("userId");
    const data = {
      userId: userId,
    };
    let response = await axios.post(
      "http://localhost:4000/superadmin/showCart",
      data
    );
    if (response.status === 200) {
      let cartItems = response.data.message;
 
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].category == "fruits") {
          getFruit(
            cartItems[i].productId,
            cartItems[i]._id,
            cartItems[i].quantity
          );
        } else if (cartItems[i].category == "seeds") {
          getSeed(cartItems[i].productId, cartItems[i]._id, cartItems[i].quantity);
        } else if (cartItems[i].category == "machinery") {
          getMachinery(cartItems[i].productId, cartItems[i]._id, cartItems[i].quantity);
        } else if (cartItems[i].category == "fertilizer") {
          getFertilizer(cartItems[i].productId, cartItems[i]._id, cartItems[i].quantity);
        } else if (cartItems[i].category == "grains") {
          getGrain(cartItems[i].productId, cartItems[i]._id, cartItems[i].quantity);
        } else if (cartItems[i].category == "vege") {
          getVege(cartItems[i].productId, cartItems[i]._id, cartItems[i].quantity);
        }
      }
    }
  }
  async function addquantity(id) {
    const data = {
      cartId: id,
    };
    let cartq = await axios.post(
      "http://localhost:4000/superadmin/getcartdata",
      data
    );
    if (cartq.status == 200) {
      let quantity = cartq.data.quantity;

      const newdata = {
        cartId: id,
        quantity: quantity,
      };
      let response = await axios.post(
        "http://localhost:4000/superadmin/increasequantity",
        newdata
      );
      if (response.status == 200) {
        alert("Increased");
        window.location.reload(false);
      }
    }
  }
  async function removequantity(id) {
    const data = {
      cartId: id,
    };
    let cartq = await axios.post(
      "http://localhost:4000/superadmin/getcartdata",
      data
    );
    if (cartq.status == 200) {
      let quantity = cartq.data.quantity;

      const newdata = {
        cartId: id,
        quantity: quantity,
      };
      let response = await axios.post(
        "http://localhost:4000/superadmin/removequantity",
        newdata
      );
      if (response.status == 200) {
        alert("Decreased");
        window.location.reload(false);
      }
    }
  }
  async function deleteCart(id) {
    console.log(id);
    let response = await axios.post(
      "http://localhost:4000/superadmin/deleteCart",
      { cartId: id }
    );
    if (response.status == 200) {
      alert("item removed");
    }
    //getCart()
  }

  async function emptycart(cartdetails) {
    for(let i=0;i<cartdetails.length;i++){
      const data = {
        cartId: cartdetails[i],
      };
      let response = await axios.post("http://localhost:5000/emptycart",data);
      if(response.status ==200){
        alert("order placed");
      }
    }
  }
 console.log(cart);
  useEffect(() => {
    
    getCart();
  }, []);
  return (
    <div>
      {tokenVal ? <Header /> : <LoginHeader />}
      <div className="shopping-cart">
        {/* Title */}
        <div className="title">Shopping Bag</div>
        {/* Product #1 */}
        {cart &&
          cart.map((a) => {
            var url = "http://localhost:4000/Controllers/Images/" + a.imagename;
            return (
              //  {a.length>0&& a.map((p)=>{
              //    return(
              <div className="item">
                <div className="buttons">
                  <span className="delete-btn" />
                  <span className="like-btn" />
                </div>
                <div className="image">
                  <img async src={url} alt="" style={{ width: "90px" }} />
                </div>
                <div className="descri">
                  <span onClick={cartdetails.push(a.cartId)}>{a.name}</span>
                </div>
                <div className="quantity">
                  <button
                    onClick={() => {
                      if (a.cquantity == a.quantity) {
                        alert("Maximum Quantity reached");
                      } else {
                        addquantity(a.cartId);
                      }
                    }}
                  >
                    +
                  </button>
                  <input
                    className="proInput"
                    type="text"
                    value={a.cquantity}
                    disabled
                  />
                  <button
                    onClick={() => {
                      if (a.cquantity == 1) {
                        deleteCart(a.cartId);
                      } else {
                        removequantity(a.cartId);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <div
                  className="total-price"
                  onLoad={(carttotal = Number(carttotal) + Number(a.cquantity) * Number(a.price))}
                >
                  ₹{a.price}
                </div>
                <div>
                  <Button
                    variant="primary"
                    style={{ marginTop: "25px", marginLeft: "100px" }}
                    onClick={() => deleteCart(a.cartId)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              //      );
              // })}
            );
          })}
      </div>
      <label
        style={{
          width: "190rem",
          fontSize: "20px",
          marginTop: "-30px",
          marginBottom: "10px",
        }}
      >
        Total : {carttotal} /-{" "}
      </label>
      <Link to="#">
        <GooglePayButton
          className="btn-dash1"
          id = "checker"
          style={{ width: "10rem" }}
          environment="TEST"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: "CARD",
                parameters: {
                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                },
                tokenizationSpecification: {
                  type: "PAYMENT_GATEWAY",
                  parameters: {
                    gateway: "example",
                    gatewayMerchantId: "exampleGatewayMerchantId",
                  },
                },
              },
            ],
            merchantInfo: {
              merchantId: "12345678901234567890",
              merchantName: "Demo Merchant",
            },
            transactionInfo: {
              totalPriceStatus: "FINAL",
              totalPriceLabel: "Total",
              totalPrice: String(carttotal),
              currencyCode: "INR",
              countryCode: "IN",
            },
            shippingAddressRequired: true,

            callbackIntents: ["SHIPPING_ADDRESS"],
          }}
          onPaymentDataChanged={(paymentData) => {}}
          onLoadPaymentData={(paymentRequest) => {
            console.log("load payment data", paymentRequest);
            emptycart(cartdetails);
          }}
        />
      </Link>
    </div>
  );
};

export default Sample;
