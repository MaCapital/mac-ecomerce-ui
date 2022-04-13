import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Styles/UserProfile.css';
import Logo from '../images/Icons/tropical-storm.svg'
import Deliver from '../images/Icons/geo-alt-fill.svg'
import Language from '../images/Icons/globe2.svg'
import CartIcon from '../images/Icons/cart.svg'
import Person from '../images/Icons/person-circle.svg'
import Google from '../images/Icons/google.svg'
import AccountIcon from '../images/Icons/person-hearts.svg'
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserProfile(props) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [historyList, setHistoryList] = useState([]);

    useEffect(() => {
        async function getData() {
            let responseData;
            const userInfo = JSON.parse(localStorage.getItem('loginData'))
            if (userInfo + "" != "undefined") {
                console.log(userInfo)
                const email = userInfo.email + "";
                const userid = userInfo.userid + "";
                await axios.get("http://localhost:8081/user?email=" + email)
                    .then((response) => responseData = response.data);
                console.log(responseData[0]);
                setName(responseData[0].username + "");
                setEmail(responseData[0].email + "");
                setRole(responseData[0].usertype + "" == "1" ? "Customer" : "Seller");
                await axios.get("http://localhost:8081/checkout?userid=" + userid)
                    .then((response) => responseData = response.data);
                buildCheckoutHistory(responseData)
            }
            else {
                console.log(userInfo)
            }
        }
        getData();
    }, []);

    const buildCheckoutHistory = (responseData) => {
        const historyListTemp = [];
        responseData.forEach(checkout => {
            historyListTemp.push(
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 className="mb-0">{(checkout.date+"").substring(0, 10)}</h6>
                    <span className="text-secondary">{checkout.description}</span>
                    <span >{checkout.total}$</span>
                </li>
            )
        });
        setHistoryList(historyListTemp);
    }

    return (
        <div>
            {/*navbar*/}
            <HeaderNavbar scFunction={props.scFunction} />
            {/*end navbar*/}
            {/*content-items-login-register,etc*/}


            <div style={{ height: "550px" }}>
                <div className="container mt-4">
                    <h6 className="display-4 text-center pb-0 pt-1">USER PROFILE</h6>
                    <div className="main-body">

                        <div className="row gutters-sm">

                            <div className="col-md-7">
                                <div className="card mb-3" style={{ height: "100%" }}>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Full Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Postal Code</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                0000
                                            </div>
                                        </div>
                                        <hr />
                                        
                                    </div>
                                </div>




                            </div>
                            <div className="col-md-5 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">

                                            <div className="mt-3">
                                                <h4>{name}</h4>

                                                <p className="text-muted font-size-sm">{role}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <h3 className='text-center'>
                                        Checkout History
                                    </h3>
                                    <ul className="list-group list-group-flush">
                                        {historyList}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*footer*/}
            <Footer />

        </div>
    );
}

export default UserProfile;