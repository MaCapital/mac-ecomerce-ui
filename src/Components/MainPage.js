import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Logo from '../images/Icons/tropical-storm.svg'
import Deliver from '../images/Icons/geo-alt-fill.svg'
import Language from '../images/Icons/globe2.svg'
import CartIcon from '../images/Icons/cart.svg'
import AccountIcon from '../images/Icons/person-hearts.svg'
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemWrapper from './ItemWrapper';


function MainPage(props) {
  console.log(localStorage.getItem("loginData"))
  const [column, setColumn] = useState([]);
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function getData() {
      let responseData;
      await axios.get("http://localhost:8081/subcategories")
        .then((response) => responseData = response.data);

      fillItemRowAndColumns(responseData);
    }
    getData();
  }, []);

  const getDataFromSubcategories = async (subcategoryid) => {
    console.log('subcat id =' + subcategoryid)
    let responseData;
    await axios.get("http://localhost:8081/itemrandom?subcategoryid=" + subcategoryid)
      .then((response) => responseData = response.data);
  }

  //to show all items in wrappers
  const fillItemRowAndColumns = async (dataSc) => {
    let columns = [];
    let counter = 0;
    for (const subcat of dataSc) {
      let counter2 = 0;
      counter++;

      let row = []
      let responseData;
      await axios.get("http://localhost:8081/itemrandom?subcategoryid=" + subcat.subcategoryid)
        .then((response) => responseData = response.data);
      console.log(responseData)
      responseData.forEach(element => {
        counter2++;
        row.push(<ItemWrapper name={element.name} price={element.unitprice} key={counter2} id={element.itemid} itFunction={props.itFunction} brand={element.brand} />)
      });

      columns.push(
        <div key={counter}>
          <h1 className='text-center  pt-5' data-dismiss="modal">{subcat.name}</h1>
          <div className="container justify-content-center mt-100">
            <div key={counter} className="row">
              {row}

            </div>
          </div>
        </div>
      )
    }
    setColumn(columns)
  }



  return (
    <div>
      <HeaderNavbar scFunction={props.scFunction} setLoginData={props.setLoginData} />
      {/*content-items-login-register,etc*/}
      <div className>
        <div className="imagebox">
          <img src={require('../images/Mainpage.jpg')} style={{ width: "100%" }} alt="Responsive image" className='' />
          <span class="imagebox-desc">Welcome to 1st Bolivia's Virtual Store </span>
        </div>
        <div className="container bg-light">
        </div>
        <div className="container bg-light">
          <h1 className='text-center  pt-5' data-dismiss="modal">Our Products</h1>
          {column}
        </div>

      </div>
      {/*footer*/}
      <Footer />
    </div>
  );
}

export default MainPage;