
import React, { useState } from "react";
import ReactDOM from "react-dom"
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalPayiment(props) {

    
    const [price, setPrice] = useState("0")

    const createOrder = (data, actions) => {
        setPrice(props.price)
        console.log("this is my price " + props.price)
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: props.price+"",
                    },
                },
            ],
        });
    }
    const onApprove = (data, actions) => {
        console.log(data)   
        return actions.order.capture();
    }

    return (
        <>
        <HeaderNavbar scFunction={props.scFunction} setLoginData={props.setLoginData}/>
        <div className="paypal">
            <div className="wrapper">
                <PayPalButton
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default PaypalPayiment;