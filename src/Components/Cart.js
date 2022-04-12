import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
function Cart() {


    const cartUserInfo = JSON.parse(localStorage.getItem('cartData'));
    console.log(cartUserInfo.cartid);
    const cartid = cartUserInfo.cartid;

    useEffect(() => {
        async function getData() {
            let responseData;
            await axios.get("http://localhost:8081/cartdetail?cartid=" + cartid)
                .then((response) => responseData = response.data);
            fillCartDetailsRows(responseData);
        }
        getData();
        //

    }, []);

    const [details, setDetails] = useState([]);

    const fillCartDetailsRows = (data) => {
        let counter = 0;
        let detailsList = [];
        data.forEach(detail => {
            counter++;
            detailsList.push(
                //
                <div key={counter} className=" row " style={{ fontFamily: 'monospace' }}>
                    <div className="col-7">
                        <div className="row">
                            <img src={require('../images/product4.jpg')} className="col-4 img-thumbnail bg-white border-0" style={{ display: 'block' }} alt="" />
                            <div className='col-1'></div>
                            <div className="col-7">
                                <h3>{detail.name}</h3>
                                <p>{detail.brand}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 text-right">
                        <h4 className="display">{detail.quantity} </h4>
                    </div>
                    <div className="col-2 text-right">
                        <h4 className="display">{detail.itemprice} $</h4>
                    </div>
                </div>
            )
        });
        setDetails(detailsList);
    }




    return (
        <div>
            {/*navbar*/}
            <HeaderNavbar />
            {/*end navbar*/}
            {/*content-items-login-register,etc*/}
            <div className='container'>
                <div className="container bg-white pl-5 pr-5 mb-5 mt-3 pb-5">
                    <h6 className="display-4 text-center pb-0 pt-1">CART</h6>
                    <br />
                    <div className="row pt-1">
                        <h6 className="col-6 text-left">DETAILS</h6>
                        <h6 className="col-4 text-right">QUANTITY</h6>
                        <h6 className="col-2 text-right">PRICE </h6>
                    </div>


                    <hr />
                    {details}
                    <div className="row" style={{ fontFamily: 'monospace' }}>
                        <div className="col-12 text-right">
                            <h4 className="display text-dark">TOTAL:</h4>
                            <h5 className="display text-dark">2000 $
                            </h5>
                            <p>Shipping &amp; taxes calculated at checkout
                            </p>
                        </div>
                    </div>
                    <div className="row" style={{ fontFamily: 'monospace' }}>
                        <div className="col-10">
                        </div>
                        <div className="col-2">
                            <button className="btn btn-block btn-outline-dark bg-dark text-light">CHECK OUT</button>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer*/}
            <Footer />
        </div>
    );
}

export default Cart;