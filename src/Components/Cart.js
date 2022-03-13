import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
function Cart() {
    return (
        <div>
            {/*navbar*/}
            <div className="container-fluid">
                <nav className="row navbar navbar-expand-md navbar-dark bg-dark pb-0">
                    <div className="container-fluid">
                        <a className="navbar-brand px-4 " href="#">OARRMAC
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0 p-3">
                                <li className="nav-item delivery">
                                    <a className="nav-link acti   ve " aria-current="page" href="#">Delivery to</a>
                                </li>
                            </ul>
                            <input className="form-control nav-item me-2" type="search" placeholder="Search" aria-label="Search" />
                            <ul className="navbar-nav me-auto mb-2 mb-md-0 p-3">
                                <li className="nav-item ">
                                    <a className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3" aria-current="page" href="#">Lang</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " aria-current="page" href="#">Account</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " href="#">
                                        Cart AMOR
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row bg-dark">
                    <div className="col-1 px-5 pt-0 pb-2">
                        <label htmlFor type="button" className="col font-weight-light px-4" data-toggle="modal" data-target="#myModal2">ALL</label>
                    </div>
                    <div className="col-4 px-5 pt-0 pb-2">
                        <label htmlFor type="button" className="col font-weight-light px-5" data-target="#">Today's deals</label>
                    </div>
                </div>
            </div>
            {/*end navbar*/}
            {/*content-items-login-register,etc*/}
            <div className='container'>
                <div className="container bg-white pl-5 pr-5 mb-5 mt-3">
                    <h6 className="display-4 text-center pb-0 pt-1">CART</h6>
                    <br />
                    <div className="row pt-0">
                        <h6 className="col-6 text-left">DETAILS</h6>
                        <h6 className="col-4 text-right">QUANTITY</h6>
                        <h6 className="col-2 text-right">PRICE </h6>
                    </div>
                    <hr />
                    <div className=" row " style={{ fontFamily: 'monospace' }}>
                        <div className="col-7">
                            <div className="row">
                                <img src={require('../images/product.jpg')} className="col-7 img-thumbnail bg-white border-0" style={{ display: 'block' }} alt="" />
                                <div className="col-5">
                                    <h3>Product 1</h3>
                                    <p>brand</p>
                                    <p>color</p>
                                    <p>size</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 text-right">
                            <h4 className="display">20 </h4>
                        </div>
                        <div className="col-2 text-right">
                            <h4 className="display">100 $</h4>
                        </div>
                    </div>

                    <hr />
                    <div className="row" style={{ fontFamily: 'monospace' }}>
                        <div className="col-12 text-right">
                            <h4 className="display text-dark">TOTAL:</h4>
                            <h5 className="display text-dark">100 $
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
            <footer className="footer  bg-dark">
                <div className="container">
                    <div className="row p-4 ">
                        <div className="col common-letter px-5">Conditions of Use</div>
                        <div className="col common-letter">Contact Us</div>
                        <div className="col common-letter">Privacy Notice</div>
                        <div className="col common-letter">MaCapital.inc </div>
                    </div>
                </div>
            </footer>
            {/*MODAL - ALL*/}
            <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="menu" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                            <h5>PRODUCTS</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <h4>Shop by department</h4>
                                <ul className="shop_departmen_modal" style={{ listStyle: 'none' }}>
                                    <li><label className="text-black " htmlFor type="button">Clothing</label>
                                        <div>
                                        </div></li>
                                    <li><label className="text-black" htmlFor type="button">Shoes</label></li>
                                </ul>
                                <hr className="text-black-50" />
                                <h4>Help &amp; Settings</h4>
                                <ul className="help_settings_modal" style={{ listStyle: 'none' }}>
                                    <li><label className="text-black" type="button" htmlFor>Your Account</label></li>
                                    <li><label type="button" className="text-black" htmlFor>Sign in/out</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*END MODAL - ALL*/}
        </div>
    );
}

export default Cart;