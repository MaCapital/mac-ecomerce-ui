import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
function ItemView(props) {

    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        console.log(props.it)
        async function getData() {
            let responseData;
            //let stateSC = props.sc;
            await axios.get("http://localhost:8081/items?ids=" + props.it)
                .then((response) => responseData = response.data);
            //console.log(responseData);
            fillItem(responseData);
        }
        getData();
    }, [props.it]);

    const fillItem = (data) => {
        //console.log(data);
        setItem(data[0]);
        //console.log(item);

    }

    const cartOnClick = async () => {
        const cartUserInfo = JSON.parse(localStorage.getItem('cartData'));
        console.log(cartUserInfo.cartid);
        const cartid = cartUserInfo.cartid;
        const res_cartDetail = await axios.post("http://localhost:8081/createcd?cartid=" + cartid + "&itemid=" + item.itemid + "&name=" + item.name + "&brand=" + item.brand + "&price=" + item.unitprice + "&quantity=" + quantity);
        console.log(res_cartDetail);
    }

    const handleOnChange = async (event) => {
        setQuantity(event.target.value);
        console.log('count : ', quantity);
        //console
    }



    return (
        <div>
            <HeaderNavbar scFunction={props.scFunction} />
            {/*content-items-login-register,etc*/}
            <div className="">
                <div className="container bg-white mx-5 my-3">
                    <div className="row">
                        {/*carousel + details product*/}
                        <div className="container">
                            <div className="row mb-3">
                                <div className="col-7 px-5 ml-5 mb-1 mt-4 mr-1 pt-1">
                                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active d-block">
                                                <img src={require('../images/product.jpg')} className="img-fluid" alt="" />
                                            </div>

                                        </div>
                                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col bg-white mb-5 mt-4 ml-1 mr-5 pt-4 ">


                                    <form className="product-view rounded">
                                        <div className="rounded">
                                            <h2 className="text-left" style={{ fontFamily: 'monospace' }}>
                                                {item.name}
                                            </h2>
                                            <br />
                                        </div>
                                        <label htmlFor className="text-dark">{item.unitprice} $</label>
                                        <hr />
                                        <label htmlFor className="text-dark">Brand: {item.brand}</label>
                                        <hr />
                                        <label htmlFor className="text-dark">Color: {item.color}</label>
                                        <hr />
                                        <div className="input-group mb-3 ">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Size</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>Choose...</option>
                                                <option value={1}>S</option>
                                                <option value={2}>M</option>
                                                <option value={3}>L</option>
                                                <option value={4}>XL</option>
                                                <option value={5}>XXL</option>
                                                <option value={6}>XML</option>
                                            </select>
                                        </div>
                                        <hr className />
                                        <div className="input-group">

                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Quantity</label>

                                            <input className="input-group-append custom-select " onChange={handleOnChange} type="number" min={1} max={15} id="inputGroupSelect01" />
                                        </div>
                                        <hr />
                                        <label htmlFor className="text-dark">{item.about}</label>
                                        <hr />
                                        <button type="button" className="btn btn-dark btn-block" onClick={cartOnClick} >Add to cart</button>
                                    </form>


                                </div>
                            </div>
                        </div>
                        {/*end carousel + details product*/}
                    </div>
                    <div className="row">

                    </div>
                </div>
            </div>
            {/*footer*/}
            <Footer />

        </div>
    );
}

export default ItemView;