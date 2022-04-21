import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Logo from '../images/Icons/power.svg'
import Deliver from '../images/Icons/geo-alt-fill.svg'
import Language from '../images/Icons/question-circle.svg'
import CartIcon from '../images/Icons/cart.svg'
import AccountIcon from '../images/Icons/person-hearts.svg'
import SearchIcon from '../images/Icons/share.svg'
import { useEffect, useState } from 'react';
import getData from '../utils/HttpCommon';
import axios from 'axios';
import ItemWrapper from './ItemWrapper';
import { Link } from "react-router-dom";
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

function HeaderNavbar(props) {
    //https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link
    const history = useHistory();
    const handleOnClick = (subcategoryId) => {
        history.push('/itemlist');
        //here we execute the props.scFunction to modify the father App state 
        //this is for itemList, to lsit by subcategoryId
        props.scFunction(subcategoryId);
    };

    //const [categories, setCategories] = useState([]);
    const [categorycolumn, setCategorycolumn] = useState([]);
    //const [subcategories, setSubcategories] = useState([]);
    const [subcategorycolumn, setSubcategorycolumn] = useState([]);
    //*to get categories 
    //console.log(JSON.parse(localStorage.getItem('loginData')).usertype+"")
    const [isSeller, setIsSeller] = useState(
        localStorage.getItem('loginData') + "" != "null" ? JSON.parse(localStorage.getItem('loginData')).usertype + "" == "2" ? true : false : false
    )

    const [isDad, setIsDad] = useState(
        localStorage.getItem('loginData') + "" != "null" ? JSON.parse(localStorage.getItem('loginData')).usertype + "" == "3" ? true : false : false
    )

    const [isLogged, setIsLogged] = useState(
        localStorage.getItem('loginData') + "" != "null" ? true : false
    )
    const [load, setLoad] = useState(0);
    useEffect(() => {
        async function getData() {
            let responseData;
            await axios.get("http://localhost:8081/categories")
                .then((response) => responseData = response.data);
            fillCategoriesColumns(responseData);
        }
        getData();
        //
        setIsSeller(localStorage.getItem('loginData') + "" != "null" ? JSON.parse(localStorage.getItem('loginData')).usertype + "" == "2" ? true : false : false)
        setIsLogged(localStorage.getItem('loginData') + "" != "null" ? true : false)
    }, [load]);
    //*rendering categories 
    const fillCategoriesColumns = (data) => {
        let counter = 0;
        let categoryList = [];
        data.forEach(category => {
            counter++;
            categoryList.push(
                <li key={counter}>
                    <label data-dismiss="modal" htmlFor type="button" className="col  text-dark" data-toggle="modal" data-target="#myModal3" onClick={() => { handleCatModalOnClick(category.categoryid) }}>
                        {category.categoryname}
                    </label>
                </li>
            )
        });
        setCategorycolumn(categoryList);
    }
    //*to get subcategories 
    const handleCatModalOnClick = async (categoryId) => {
        let responseData;
        await axios.get("http://localhost:8081/subcategories?category=" + categoryId)
            .then((response) => responseData = response.data);
        fillSubCategoriesColumn(responseData);
    }
    //*rendering subcategories 
    const fillSubCategoriesColumn = (data) => {
        let countersc = 0;
        let subcategoryList = [];
        data.forEach(subcategory => {
            countersc++;
            subcategoryList.push(
                <li key={countersc}>
                    <label className="text-dark " htmlFor type="button" data-dismiss="modal"
                        onClick={() => handleOnClick(subcategory.subcategoryid)}>{subcategory.name}</label>
                </li>
            )
        });
        setSubcategorycolumn(subcategoryList);
    };

    const [searchBar, setSearchBar] = useState("");

    const handleChange = (event) => {
        setSearchBar(event.target.value + "");
        //console.log(event.target.value)
        console.log(searchBar)

    }

    const SearchBarOnClick = () => {
        let searchBarSE = 'Bus: ' + searchBar;
        console.log(searchBarSE);
        props.scFunction(searchBarSE)
        history.push('/itemlist');
    }

    const handleLogout = () => {
        localStorage.removeItem('loginData');
        localStorage.removeItem('cartData');
        setLoad(load + 1)
        //props.setLoginData(null);
        history.push('/main')
    };

    const handleLogin = () => {
        history.push('/login')
    };

    const handleRegister = () => {
        history.push('/signup')
    };

    const handleUserLink = () => {
        history.push('/profile')
    }

    const handleMain = () => {
        history.push('/main')
    }

    const handleProductManager = () => {
        history.push('/productman');
    }
    const handleUserManager = () => {
        history.push('/userman');
    }
    const handleCart = () => {
        history.push('/cart')
    }
    const handleHelp = () => {
        history.push('/help')
    }
    return (
        <>
            {/*navbar*/}
            <div className="container-fluid" id='navbar' >
                <nav className="row navbar navbar-expand-md navbar-dark  pb-0" style={{ backgroundColor: 'black' }}>
                    <div className="container-fluid">
                        <img type="button" onClick={handleMain} src={Logo} style={{ width: "90px", height: "35px" }} alt="" className="src col-2" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-1 mb-md-0 p-2 col-1 justify-content-center text-center">
                                <li className="nav-item delivery">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        {/**<div>Delivery to</div> */}
                                        <img src={Deliver} style={{ width: "50px", height: "25px" }} alt="#" className="" />
                                    </a>
                                </li>
                            </ul>
                            {/**search box */}
                            <div className="input-group mb-1">
                                {/**text */}
                                <input type="text" id="exporationtext" className="form-control" placeholder="Recipient's username"
                                    aria-label="you can search products here" aria-describedby="basic-addon2"
                                    onChange={handleChange} />
                                {/** call to f... */}
                                <div className="input-group-append ">
                                    <span className="input-group-text" id="basic-addon2">
                                        <img src={SearchIcon} type="submit" onClick={() => SearchBarOnClick(searchBar)} alt=""></img>
                                    </span>
                                </div>
                            </div>

                            <ul className="navbar-nav mx-2 mb-1 mb-md-0 p-2">
                                <li className="nav-item">
                                    <label type="button" className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " >
                                        <img src={Language} style={{ width: "30px", height: "30px" }} alt="" className="src" onClick={handleHelp} />
                                    </label>
                                </li>
                                {isLogged == true ? (<li className="nav-item " onClick={handleUserLink}>
                                    <label type="button" className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " aria-current="page" href="h"><img src={AccountIcon} style={{ width: "30px", height: "30px" }} alt="" className="src" /></label>
                                </li>) : (<li className="nav-item " onClick={handleLogin}>
                                    <label type="button" className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " aria-current="page" href="h"><img src={AccountIcon} style={{ width: "30px", height: "30px" }} alt="" className="src" /></label>
                                </li>)}
                                <li className="nav-item ">
                                    <label type="button" className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " href="h">
                                        <img src={CartIcon} style={{ width: "30px", height: "30px" }} alt="" className="src" onClick={handleCart} />
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row " style={{ backgroundColor: 'black' }} >
                    <div className="col-1 px-5 pt-0 pb-0 " >
                        <label htmlFor type="button" className="col font-weight-light px-4" data-toggle="modal" data-target="#myModal2">ALL</label>
                    </div>
                    <div className="col-4 px-5 pt-0 pb-0">
                        {/**<label htmlFor type="button" className="col font-weight-light px-5" data-target="#">Today's deals</label> */}
                    </div>
                </div>
            </div>
            {/*end navbar*/}

            {/*MODAL - ALL*/}
            <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">PRODUCTS</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="container">

                                <h4>Shop by department </h4>
                                <ul className="shop_departmen_modal" style={{ listStyle: 'none' }}>
                                    {/* rendering list of categories here */}
                                    {categorycolumn}
                                </ul>
                                <hr className="text-black-50" />
                                <h4>Help &amp; Settings</h4>
                                <ul className="help_settings_modal" style={{ listStyle: 'none' }}>
                                    <li><label className="text-dark" type="button" htmlFor>Your Account</label></li>
                                    <li><label type="button" className="text-dark" htmlFor data-dismiss="modal" onClick={handleLogin}>Login</label></li>
                                    <li><label type="button" className="text-dark" htmlFor data-dismiss="modal" onClick={handleRegister}>Register</label></li>
                                    <li><label type="button" className="text-dark" htmlFor onClick={handleLogout} data-dismiss="modal">Sign out</label></li>
                                    <li><label type="button" className="text-dark" htmlFor onClick={handleHelp} data-dismiss="modal">Help</label></li>
                                </ul>

                                {isSeller == true ? (<><hr className="text-black-50" />
                                    <h4>Additional Settings</h4>
                                    <ul className="help_settings_modal" style={{ listStyle: 'none' }}>

                                        <li><label data-dismiss="modal" className="text-dark" type="button" onClick={handleProductManager} htmlFor>Seller Options</label></li>
                                    </ul></>) : (<></>)}
                                {isDad == true ? (<><hr className="text-black-50" />
                                    <h4>Super Settings</h4>
                                    <ul className="help_settings_modal" style={{ listStyle: 'none' }}>

                                        <li><label data-dismiss="modal" className="text-dark" type="button" onClick={handleUserManager} htmlFor>Users Options</label></li>
                                    </ul></>) : (<></>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*END MODAL - ALL*/}
            {/*MODAL - ALL*/}
            <div className="modal fade" id="myModal3" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <button type="menu" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                            <h5>PRODUCTS s</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {/* list sub categories by categori id here */}
                                <h4>Clothing</h4>
                                <ul className="shop_departmen_modal" style={{ listStyle: 'none' }}>
                                    {/* link to itemsList screen */}
                                    {subcategorycolumn}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*END MODAL - ALL*/}
        </>
    )
}
export default HeaderNavbar;