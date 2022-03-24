import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Logo from '../images/Icons/tropical-storm.svg'
import Deliver from '../images/Icons/geo-alt-fill.svg'
import Language from '../images/Icons/globe2.svg'
import CartIcon from '../images/Icons/cart.svg'
import AccountIcon from '../images/Icons/person-hearts.svg'
import HeaderNavbar from './HeaderNavbar';

function MainPage() {
  return (
    <div>
      <HeaderNavbar val = {true}/>
      {/*content-items-login-register,etc*/}
      <div className>
        <div className="bg-dark">
          <img src={require('../images/Mainpage.jpg')} style={{ width: "100%" }} alt="Responsive image" />
        </div>

        <div className="container bg-light">
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
      
    </div >
  );
}

export default MainPage;