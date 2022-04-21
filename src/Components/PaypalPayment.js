
import React, { useState } from "react";
import ReactDOM from "react-dom"
import Footer from "./Footer";
import HeaderNavbar from "./HeaderNavbar";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Back from '../images/Icons/chevron-left.svg'
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function PaypalPayiment(props) {
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    const createOrder = (data, actions) => {
        console.log("obj state " + JSON.stringify(props.paypalDetail));

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: props.paypalDetail.total + "",
                    },
                },
            ],
        });
    }
    const onApprove = async (data, actions) => {
        console.log(data)
        const userid = JSON.parse(localStorage.getItem("loginData")).userid;
        const userid_ = userid;
        const cartid = JSON.parse(localStorage.getItem("cartData")).cartid;
        const price = props.paypalDetail.total;
        const description = props.paypalDetail.description;
        console.log("my values " + userid + " " + cartid + " " + price + " " + description);
        const query = `cartid=${cartid}&userid=${userid}&total=${price}&description=${description}`
        console.log(query)

        axios.post("http://localhost:8081/checkout?" + query);

        return actions.order.capture();

    }

    const createNewCart = () => {
        const userid = JSON.parse(localStorage.getItem("loginData")).userid;
        const userid_ = userid;
        const res_cart = axios.post("http://localhost:8081/createcart?userid=" + userid_);
        localStorage.setItem('cartData', JSON.stringify(res_cart.data)); //save to localstorage
    }
    return (
        <>
            <HeaderNavbar scFunction={props.scFunction} setLoginData={props.setLoginData} />
            <div className="">
                <div className="paypal">
                    <div className="wrapper">
                        <PayPalButton
                            createOrder={(data, actions) => createOrder(data, actions)}
                            onApprove={(data, actions) => onApprove(data, actions)}
                        />
                        <hr className="" />
                        <button className="btn btn-danger align-content-center col-12" onClick={goBack} type="button">Cancel</button>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default PaypalPayiment;