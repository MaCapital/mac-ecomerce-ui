import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Logo from '../images/Icons/tropical-storm.svg'
import Deliver from '../images/Icons/geo-alt-fill.svg'
import Language from '../images/Icons/globe2.svg'
import CartIcon from '../images/Icons/cart.svg'
import Person from '../images/Icons/person-circle.svg'
import Google from '../images/Icons/google.svg'
import AccountIcon from '../images/Icons/person-hearts.svg'
function ItemList() {

    return (
        <div>
            {/*navbar*/}
            <div className="container-fluid">
                <nav className="row navbar navbar-expand-md navbar-dark bg-dark pb-0">
                    <div className="container-fluid">

                        <img src={Logo} style={{ width: "50px", height: "50px" }} alt="" className="src col-1" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0 p-3 col-2 justify-content-center text-center">
                                <li className="nav-item delivery">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        <div>Delivery to</div>
                                        <img src={Deliver} style={{ width: "50px", height: "25px" }} alt="" className="src" />
                                    </a>
                                </li>
                            </ul>
                            <input className="form-control nav-item me-2" type="search" placeholder="Search" aria-label="Search" />
                            <ul className="navbar-nav me-auto mb-2 mb-md-0 p-3">
                                <li className="nav-item">
                                    <a href="#" className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " >
                                        <img src={Language} style={{ width: "30px", height: "30px" }} alt="" className="src" />
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " aria-current="page" href="#"><img src={AccountIcon} style={{ width: "30px", height: "30px" }} alt="" className="src" /></a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " href="#">
                                        <img src={CartIcon} style={{ width: "30px", height: "30px" }} alt="" className="src" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row bg-dark">
                    <div className="col-1 px-5 pt-0 pb-0 ">
                        <label htmlFor type="button" className="col font-weight-light px-4" data-toggle="modal" data-target="#myModal2">ALL</label>
                    </div>
                    <div className="col-4 px-5 pt-0 pb-0">
                        <label htmlFor type="button" className="col font-weight-light px-5" data-target="#">Today's deals</label>
                    </div>
                </div>
            </div >
            {/*end navbar*/}
            {/*content-items-login-register,etc*/}
            <div className>
                <div className="container bg-light pt-4">
                    <div>
                        <h1 className='text-center'>Clothing</h1>
                        <div className="container d-flex justify-content-center mt-4">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-45 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/tL7ZE46.jpg" alt="" /> </a> <span className="text-center"><i className="fa fa-rupee" /> 43,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a href="#"> asdf</a> <a href="#"> <i className="fa fa-heart" /> </a> <a href="#"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-4 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/lAQxXCK.jpg" alt="" /> </a> <span><i className="fa fa-rupee" /> 41,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a className="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i className="fa fa-plus" /> </a> <a className="action-heart" title="Wishlist" href="#" data-abc="true"> <i className="fa fa-heart" /> </a> <a className="action-cart" title="Add To Cart" href="#" data-abc="true"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-4 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/HxEEu5g.jpg" alt="" /> </a> <span><i className="fa fa-rupee" /> 33,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a className="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i className="fa fa-plus" /> </a> <a className="action-heart" title="Wishlist" href="#" data-abc="true"> <i className="fa fa-heart" /> </a> <a className="action-cart" title="Add To Cart" href="#" data-abc="true"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-45 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/lAQxXCK.jpg" alt="" /> </a> <span><i className="fa fa-rupee" /> 23,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a className="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i className="fa fa-plus" /> </a> <a className="action-heart" title="Wishlist" href="#" data-abc="true"> <i className="fa fa-heart" /> </a> <a className="action-cart" title="Add To Cart" href="#" data-abc="true"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container d-flex justify-content-center mt-100">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-45 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/tL7ZE46.jpg" alt="" /> </a> <span className="text-center"><i className="fa fa-rupee" /> 43,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a href="#"> asdf</a> <a href="#"> <i className="fa fa-heart" /> </a> <a href="#"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-45 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/lAQxXCK.jpg" alt="" /> </a> <span><i className="fa fa-rupee" /> 41,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a className="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i className="fa fa-plus" /> </a> <a className="action-heart" title="Wishlist" href="#" data-abc="true"> <i className="fa fa-heart" /> </a> <a className="action-cart" title="Add To Cart" href="#" data-abc="true"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-45 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/HxEEu5g.jpg" alt="" /> </a> <span><i className="fa fa-rupee" /> 33,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a className="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i className="fa fa-plus" /> </a> <a className="action-heart" title="Wishlist" href="#" data-abc="true"> <i className="fa fa-heart" /> </a> <a className="action-cart" title="Add To Cart" href="#" data-abc="true"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="product-wrapper mb-45 text-center">
                                        <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/lAQxXCK.jpg" alt="" /> </a> <span><i className="fa fa-rupee" /> 23,000</span>
                                            <div className="product-action">
                                                <div className="product-action-style"> <a className="action-plus" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#" data-abc="true"> <i className="fa fa-plus" /> </a> <a className="action-heart" title="Wishlist" href="#" data-abc="true"> <i className="fa fa-heart" /> </a> <a className="action-cart" title="Add To Cart" href="#" data-abc="true"> <i className="fa fa-shopping-cart" /> </a> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default ItemList;