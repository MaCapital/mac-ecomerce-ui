import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Logo from '../images/Icons/tropical-storm.svg'
import Deliver from '../images/Icons/geo-alt-fill.svg'
import Language from '../images/Icons/globe2.svg'
import CartIcon from '../images/Icons/cart.svg'
import AccountIcon from '../images/Icons/person-hearts.svg'
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
    const handleOnClick = useCallback(() => history.push('/itemlist'), [history]);
    //const [categories, setCategories] = useState([]);
    const [categorycolumn, setCategorycolumn] = useState([]);
    //const [subcategories, setSubcategories] = useState([]);
    const [subcategorycolumn, setSubcategorycolumn] = useState([]);
    //*to get categories 
    useEffect(() => {
        async function getData() {
            let responseData;
            await axios.get("http://localhost:8081/categories")
                .then((response) => responseData = response.data);
            fillCategoriesColumns(responseData);
        }
        getData();
    }, []);
    //*rendering categories 
    const fillCategoriesColumns = (data) => {
        let counter = 0;
        let categoryList = [];
        data.forEach(category => {
            counter++;
            categoryList.push(
                <li key={counter}>
                    <label data-dismiss="modal" htmlFor type="button" className="col  text-dark" data-toggle="modal" data-target="#myModal3" onClick={() => { handleCatModalOnClick(category.categoryId) }}>
                        {category.categoryName}
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
        console.log(responseData);
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
                    <label className="text-dark " htmlFor type="button" data-dismiss="modal" onClick={handleOnClick}>{subcategory.name}</label>
                </li>
            )
        });
        setSubcategorycolumn(subcategoryList);
    };
    return (
        <>
            {/*navbar*/}
            <div className="container-fluid">
                <nav className="row navbar navbar-expand-md navbar-dark bg-dark pb-0">
                    <div className="container-fluid">
                        <img src={Logo} style={{ width: "50px", height: "50px" }} alt="" className="src col-1" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-1 mb-md-0 p-2 col-2 justify-content-center text-center">
                                <li className="nav-item delivery">
                                    <a className="nav-link active" aria-current="page" href="h">
                                        <div>Delivery to</div>
                                        <img src={Deliver} style={{ width: "50px", height: "25px" }} alt="" className="src" />
                                    </a>
                                </li>
                            </ul>
                            <input className="form-control nav-item me-2" type="search" placeholder="Search" aria-label="Search" />
                            <ul className="navbar-nav mx-2 mb-1 mb-md-0 p-2">
                                <li className="nav-item">
                                    <a href="h" className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " >
                                        <img src={Language} style={{ width: "30px", height: "30px" }} alt="" className="src" />
                                    </a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " aria-current="page" href="h"><img src={AccountIcon} style={{ width: "30px", height: "30px" }} alt="" className="src" /></a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-item navbar-brand me-auto mb-2 mb-md-0 px-3 " href="h">
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
            </div>
            {/*end navbar*/}
            {/*MODAL - ALL*/}
            <div className="modal fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" >
                        <div className="modal-header">
                            <button type="menu" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                            <h5>PRODUCTS</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <h4>Shop by department</h4>
                                <ul className="shop_departmen_modal" style={{ listStyle: 'none' }}>
                                    {/* rendering list of categories here */}
                                    {categorycolumn}
                                </ul>
                                <hr className="text-black-50" />
                                <h4>Help &amp; Settings</h4>
                                <ul className="help_settings_modal" style={{ listStyle: 'none' }}>
                                    <li><label className="text-dark" type="button" htmlFor>Your Account</label></li>
                                    <li><label type="button" className="text-dark" htmlFor>Sign in/out</label></li>
                                </ul>
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
                            <h5>PRODUCTS</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                {/* list sub categories by categori id here */}
                                <h4>Clothing</h4>
                                <ul className="shop_departmen_modal" style={{ listStyle: 'none' }}>
                                    {/* link to itemsList screen */}
                                    {subcategorycolumn}
                                </ul>
                                {/* help and setting button, fixed */}
                                <hr className="text-black-50" />
                                <h4>Help &amp; Settings</h4>
                                <ul className="help_settings_modal" style={{ listStyle: 'none' }}>
                                    <li><label className="text-dark" type="button" htmlFor>Your Account</label></li>
                                    <li><label type="button" className="text-dark" htmlFor>Sign in/out</label></li>
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