import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemWrapper from './ItemWrapper';
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
function ItemList(props) {
    //const [items, setItems] = useState([]);
    const [column, setColumn] = useState([]);
    useEffect(() => {
        console.log(props.sc)
        async function getData() {
            let responseData;
            await axios.get("http://localhost:8081/items?subcategory=" + props.sc)
                .then((response) => responseData = response.data);
            console.log(responseData);
            //setItems(responseData)
            fillItemRowAndColumns(responseData);
        }
        getData();
    }, [props.sc]);
    const fillItemRowAndColumns = (data) => {
        let columns = [];
        let counter = 0;
        let row = [];
        data.forEach(item => {
            counter++;
            row.push(<ItemWrapper name={item.name} price={item.unitPrice} key={counter} />)
            if (counter % 4 == 0) {
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

        if (row.length > 0) {
            columns.push(
                <div key={counter + 1} className="container  justify-content-center mt-4">
                    <div key={counter + 1} className="row">
                        {row}
                    </div>
                </div>
            )
        }
        setColumn(columns)
    }

    return (
        <div>
            {/** navbar */}
            <HeaderNavbar scFunction = {props.scFunction}/>

            {/*content-items-login-register,etc*/}
            <div className>
                <div className="container bg-light pt-4">
                    <div>
                        <h1 className='text-center' data-dismiss="modal">{props.sc}</h1>
                        {column}

                    </div>
                </div>
            </div>

            {/*footer*/}
            <Footer />
        </div>
    );
}

export default ItemList;