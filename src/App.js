import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dummy from "./Components/Dummy";
import NoPage from "./Components/NoPage";
import ItemList from "./Components/ItemList";
import MainPage from "./Components/MainPage";
import ItemView from "./Components/ItemView";
import Cart from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/main">
          <MainPage />
        </Route>
        <Route exact path="/itemlist">
          <ItemList />
        </Route>
        <Route exact path="/itemView">
          <ItemView />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <NoPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
