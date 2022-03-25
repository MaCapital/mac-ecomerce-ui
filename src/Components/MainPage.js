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

function MainPage() {
  return (
    <div>
      <HeaderNavbar val={true} />
      {/*content-items-login-register,etc*/}
      <div className>
        <div className="bg-dark">
          <img src={require('../images/Mainpage.jpg')} style={{ width: "100%" }} alt="Responsive image" />
        </div>
        <div className="container bg-light">
        </div>
      </div>
      {/*footer*/}
      <Footer />
    </div >
  );
}

export default MainPage;