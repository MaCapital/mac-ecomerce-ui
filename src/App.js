import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dummy from "./Components/Dummy";
import NoPage from "./Components/NoPage";
import ItemList from "./Components/ItemList";
import MainPage from "./Components/MainPage";
import ItemView from "./Components/ItemView";
import Cart from "./Components/Cart";
import UserProfile from "./Components/UserProfile";
import ProductManager from "./Components/ProductManager";
import UserManager from "./Components/UserManager";


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/main">
            <MainPage/>
          </Route>
          <Route exact path="/profile">
            <UserProfile/>
          </Route>
          <Route exact path="/itemlist">
            <ItemList/>
          </Route>
          <Route exact path="/productman">
            <ProductManager/>
          </Route>
          <Route exact path="/userman">
            <UserManager/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/itemview">
            <ItemView/>
          </Route>
          <Route path="*">
            <NoPage/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
