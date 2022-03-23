import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

function itemWrapper(props) {
    return (
        <div className="col-md-3">
            <div className="product-wrapper mb-45 text-center">
                <div className="product-img"> <a href="#" data-abc="true"> <img src="https://i.imgur.com/tL7ZE46.jpg" alt="" /> </a> <span className="text-center"><i className="fa fa-rupee" /> {props.price}</span>
                    <div className="product-action">
                        <div className="product-action-style"> <a href="#"> asdf</a> <a href="#"> <i className="fa fa-heart" /> </a> <a href="#"> <i className="fa fa-shopping-cart" /> </a> </div>
                    </div>
                    <div>{props.name}</div>
                </div>
            </div>
        </div>
    )
}

export default itemWrapper;