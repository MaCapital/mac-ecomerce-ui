import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
import { useHistory } from 'react-router-dom';
import Back from '../images/Icons/chevron-left.svg'
import Text from '../images/Icons/person-circle.svg'
function ItemView(props) {
    const history = useHistory();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');
    const [load, setLoad] = useState(0);
    const [commentsList, setCommentsList] = useState([]);
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
        async function getDataComments() {
            let responseDataw;
            //http://localhost:8081/comments?itemid=pr-0000001
            await axios.get("http://localhost:8081/comments?itemid=" + props.it)
                .then((responsew) => responseDataw = responsew.data);
            console.log(responseDataw)
            buildCommentarySeccion(responseDataw);
        }
        getDataComments();
        getData();

    }, [load], [props.it]);

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

    const goBack = () => {
        history.goBack();
    }
    const handleOnChangeCommentary = async (event) => {
        setComment(event.target.value);

        console.log('commentary : ', comment);

        //console
    }

    const cartOnClickCommentary = async () => {
        if (comment !== '') {
            const userInfo = JSON.parse(localStorage.getItem('loginData'));
            const userid = userInfo.userid + "";
            const username = userInfo.username + "";
            //http://localhost:8081/createcomment?itemid=pr-0000001&userid=1&username=Nono&desc=this%20is%20a%20coment
            const res_userComment = await axios.post("http://localhost:8081/createcomment?itemid=" + item.itemid + "&userid=" + userid + "&username=" + username + "&desc=" + comment);
            console.log(res_userComment);
            setLoad(load + 1);
            console.log(load);
        }
        else {
            console.log('no comment');
            setLoad(load + 1);
        }

    }

    const buildCommentarySeccion = (responseData) => {
        console.log('cons---')
        const commentaryList = [];
        let counter = 0;
        responseData.forEach(comment => {
            counter++;
            console.log(comment)
            console.log('cons--- ')
            commentaryList.push(
                <div key={counter} className='row col-12 pl-3' >
                    <div className='text-dark '>
                        <img src={Text} style={{ width: "40px", height: "40px" }} alt="" className="src pr-1" />
                        <strong>
                            <em>{comment.username} :
                            </em>
                        </strong>
                    </div>
                    <div className='pl-3 pr-2 pb-1' >
                        <div className='border border-light bg-gray-300 rounded-lg p-2 col-12' >
                            <p>{comment.description}</p>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        });
        setCommentsList(commentaryList);
    }
    return (
        <div>
            <HeaderNavbar scFunction={props.scFunction} />
            {/*content-items-login-register,etc*/}
            <div className="">
                <div className="container bg-white mx-5 ">
                    <div className="row">
                        {/*carousel + details product*/}
                        <div className="container">
                            <div className="row mb-3">
                                <label type='button' title="Go back">
                                    <img src={Back} onClick={goBack} style={{ width: "50px", height: "50px" }} alt="" className="src pt-3" />
                                </label>
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

                </div>
                <div className='container bg-light pb-5 mb-3'>
                    <hr />
                    <h1 className="text-left" style={{ fontFamily: 'monospace' }}>                         Comments </h1>
                    <br />
                    <div className="row pb-5 ">
                        <div className='col-6 ml-3'>
                            {commentsList}

                            {commentsList.length === 0 ? (<>
                                <h4 style={{ fontFamily: 'monospace' }}>No comments yet</h4>
                            </>) : (<></>)}

                        </div>
                        <div className="col-5">
                            <p className='text-dark'><strong><em>Add your own commentary :</em></strong></p>
                            <div className="input-group-prepend">
                                <textarea className="form-control" placeholder="exampleFormControlTextarea1" onChange={handleOnChangeCommentary}></textarea>
                                <div class="input-group-text btn btn-info" onClick={cartOnClickCommentary} id="btnGroupAddon">Send</div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/*footer*/}
            <Footer />

        </div >
    );
}

export default ItemView;