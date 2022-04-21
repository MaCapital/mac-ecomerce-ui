import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useHistory } from 'react-router-dom';

function ItemWrapper(props) {
    const history = useHistory();
    const ItemOnClick = (itemid) => {
        let itemid_ = itemid;
        props.itFunction(itemid_);
        history.push('/itemView');
    }
    return (
        <div className="col-md-3">
            <div className="product-wrapper mb-45 text-center">
                <div className="product-img">
                    <label data-abc="true">
                        <img src="https://i.imgur.com/tL7ZE46.jpg" alt="" onClick={() => ItemOnClick(props.id)} />
                    </label>
                    <span className="text-center">
                        <i className="fa fa-rupee" /> {props.price}
                    </span>
                    <div className="product-action">
                        <div className="product-action-style">
                            <a href="#"> {props.brand}</a> <a href="#">
                                <i className="fa fa-heart" />
                            </a> <a href="#">
                                <i className="fa fa-shopping-cart" />
                            </a>
                        </div>
                    </div>
                    <div>{props.name}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemWrapper;