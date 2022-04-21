import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ItemWrapper(props) {
    const history = useHistory();
    const [image, setImage] = useState("");
    const ItemOnClick = (itemid) => {
        let itemid_ = itemid;
        props.itFunction(itemid_);
        history.push('/itemView');
    }

    useEffect(() => {
        console.log(props.sc)

        async function getData() {
            let responseData;
            let stateSC = props.sc;

            await axios.get("http://localhost:8081/getimage?name=" + props.name)
                .then((response) => responseData = response.data.image);

            console.log("img", responseData);
            setImage(responseData);


        }
        getData();

    }, []);

    return (
        <div className="col-md-3">
            <div className="product-wrapper mb-45 text-center">
                <div className="product-img">
                    <label data-abc="true">
                        {image == "" ? (<img src="https://i.imgur.com/tL7ZE46.jpg" alt="" onClick={() => ItemOnClick(props.id)} />) : (<img src={image} alt="" onClick={() => ItemOnClick(props.id)} style={{ width: "250px", height: "350px" }} />)}
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