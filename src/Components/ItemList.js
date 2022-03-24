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
import HeaderNavbar from './HeaderNavbar';
function ItemList() {
    const[items, setItems] = useState([]);
    const[column, setColumn] = useState([]);
    
    useEffect(() => {
        async function getData() { 
            let responseData;
            await axios.get("http://localhost:8081/items")
              .then((response) => responseData = response.data);
            console.log(responseData);
            setItems(responseData)
            fillItemRowAndColumns(responseData);
        }
        getData();
    }, []);

    let columns = [];
    const fillItemRowAndColumns = (data) => {
        let counter = 0;
        let row = [];
        let key = 1;
        data.forEach(item => {            
            counter++;
            row.push(<ItemWrapper name={item.name} price={item.unitPrice} key = {counter}/>)
            if(counter % 4 == 0) {
                columns.push(   
                    <div key={counter} className="container justify-content-center mt-100">
                        <div key={counter} className="row">
                            {row}
                        </div>
                    </div>   
                )
                row = [];
            }
        });
        if(row.length > 0) {
            columns.push(
                <div key = {counter+1} className="container  justify-content-center mt-4">
                    <div key = {counter+1} className="row">
                        {row}
                    </div>
                </div>
            )
        }
        setColumn(columns)
    }
    return (
        <div>
            <HeaderNavbar/>
            {/*content-items-login-register,etc*/}
            <div className>
                <div className="container bg-light pt-4">
                    <div>
                        <h1 className='text-center' data-dismiss="modal">clothing</h1>
                        {column}
                        
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
            
        </div>
    );
}

export default ItemList;