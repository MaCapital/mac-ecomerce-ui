import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
function ItemView(props) {

    useEffect(() => {
        console.log(props.sc)
        async function getData() {
            let responseData;
            //let stateSC = props.sc;
            await axios.get("http://http://localhost:8081/items?ids=" + props.sc)
                .then((response) => responseData = response.data);
            console.log(responseData);
            fillItem(responseData);
        }
        getData();
    }, [props.sc]);

    const fillItem = (data) => {

    }

    return (
        <div>
            <HeaderNavbar scFunction={props.scFunction} />
            {/*content-items-login-register,etc*/}
            <div className>
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
                                            <div className="carousel-item">
                                                <img src={require('../images/product2.jpg')} className="img-fluid d-block" alt="" />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={require('../images/product3.jpg')} className="img-fluid d-block" alt="" />
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
                                            <h2 className="text-left" style={{ fontFamily: 'monospace' }}>Product name</h2>
                                            <br />
                                        </div>
                                        <label htmlFor className="text-dark">100$</label>
                                        <hr />
                                        <label htmlFor className="text-dark">Brand:</label>
                                        <hr />
                                        <label htmlFor className="text-dark">Color:</label>
                                        <hr />
                                        <div className="input-group mb-3 ">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">Size</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect01">
                                                <option selected>Choose...</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        <hr className />
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect01">+ / --</label>
                                            </div>
                                            <input className="input-group-append custom-select " type="number" defaultValue={0} min={0} max={10} id="inputGroupSelect01" />{/*<input*/}
                                        </div>
                                        <hr />
                                        <label htmlFor className="text-dark">This product is...</label>
                                        <hr />
                                        <button type="submit" className="btn btn-dark btn-block">Add to cart</button>
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