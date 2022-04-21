import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoPage from "./NoPage";
import ItemList from "./Components/ItemList";
import MainPage from "./Components/MainPage";
import ItemView from "./Components/ItemView";
import Cart from "./Components/Cart";
import UserProfile from "./Components/UserProfile";
import ProductManager from "./Components/ProductManager";
import UserManager from "./Components/UserManager";
import Help from "./Components/Help";

import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";

import { useState } from "react";
import PaypalPayiment from "./Components/PaypalPayment";

function App() {

  //state to manage the subCategory, we init it with ""
  const [sc, setSc] = useState("");

  //function to modify the subCategoryId, this will be called on a child component (HeaderNavbar)
  const scFunction = (scParam) => {
    setSc(scParam);
  }

  const [it, setIt] = useState("");
  const itFunction = (itParam) => {
    setIt(itParam);
  }

  const [paypalDetail, setPaypalDetail] = useState({});
  const setPaypalDet = (paypalDet) => {
    setPaypalDetail(paypalDet);
  }


  //we pass the scFunction as property for all components 
  //we pass the sc as property only to itemList
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main">
          <MainPage scFunction={scFunction} itFunction={itFunction} it={it} />
        </Route>
        <Route exact path="/profile">
          <UserProfile scFunction={scFunction} />
        </Route>
        <Route exact path="/itemlist">
          <ItemList scFunction={scFunction} sc={sc} itFunction={itFunction} it={it} />
        </Route>
        <Route exact path="/productman">
          <ProductManager />
        </Route>
        <Route exact path="/userman">
          <UserManager />
        </Route>
        <Route exact path="/cart">
          <Cart setPaypalDet={setPaypalDet} />
        </Route>
        <Route exact path="/itemview">
          <ItemView it={it} scFunction={scFunction} />
        </Route>
        <Route exact path="/login">
          <Login scFunction={scFunction} />
        </Route>
        <Route exact path="/signup">
          <Signup scFunction={scFunction} />
        </Route>
        <Route exact path="/paypal">
          <PaypalPayiment scFunction={scFunction} paypalDetail={paypalDetail} />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
