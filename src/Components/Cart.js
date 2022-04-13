import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Cart(props) {


    const cartUserInfo = JSON.parse(localStorage.getItem('cartData'));
    console.log(cartUserInfo.cartid);
    const cartid = cartUserInfo.cartid;

    const [total, setTotal] = useState(0);
    const [description, setDescription] = useState("");

    const history = useHistory();
    const handleOnClick = (totalVal) => {
        const stateObj = {
            total : total,
            description : description
        }
        props.setPaypalDet(stateObj);
        history.push('/paypal');
    };

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
        let tempTotal = 0;
        let counter = 0;
        let detailsList = [];
        let tempDesc = "";
        let isFirst = true;
        data.forEach(detail => {
            counter++;
            tempTotal = tempTotal + ((+detail.quantity) * (+detail.itemprice))
            if(isFirst == true) {
                tempDesc = tempDesc + detail.name;
                isFirst = false;
            }
            else {
                tempDesc = tempDesc + "," + detail.name
            }
            
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
        setTotal(tempTotal);
        setDescription(tempDesc);
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
                            <h5 className="display text-dark">{total} $
                            </h5>
                            <p>Shipping &amp; taxes calculated at checkout
                            </p>
                        </div>
                    </div>
                    <div className="row" style={{ fontFamily: 'monospace' }}>
                        <div className="col-10">
                        </div>
                        <div className="col-2">
                            <button className="btn btn-block btn-outline-dark bg-dark text-light" onClick={() => handleOnClick(total)}>CHECK OUT</button>
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