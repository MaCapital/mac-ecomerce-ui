import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoPage from "./NoPage";
import ItemList from "./Components/ItemList";
import MainPage from "./Components/MainPage";
import ItemView from "./Components/ItemView";
import Cart from "./Components/Cart";
import UserProfile from "./Components/UserProfile";
import ProductManager from "./Components/ProductManager";
import UserManager from "./Components/UserManager";

import Login from "./Components/Login.js";
import Signup from "./Components/Signup.js";

import { useState } from "react";

function App() {

  //state to manage the subCategory, we init it with ""
  const [sc, setSc] = useState("");

  //function to modify the subCategoryId, this will be called on a child component (HeaderNavbar)
  const scFunction = (scParam) => {
    setSc(scParam);
  }

  //we pass the scFunction as property for all components 
  //we pass the sc as property only to itemList
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main">
          <MainPage scFunction={scFunction}/>
        </Route>
        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/itemlist">
          <ItemList scFunction={scFunction} sc={sc}/>
        </Route>
        <Route exact path="/productman">
          <ProductManager />
        </Route>
        <Route exact path="/userman">
          <UserManager />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/itemview">
          <ItemView />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
