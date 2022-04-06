import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import Logo from '../images/Icons/tropical-storm.svg'
import Deliver from '../images/Icons/geo-alt-fill.svg'
import Language from '../images/Icons/globe2.svg'
import CartIcon from '../images/Icons/cart.svg'
import Person from '../images/Icons/person-circle.svg'
import Google from '../images/Icons/google.svg'
import AccountIcon from '../images/Icons/person-hearts.svg'
import HeaderNavbar from './HeaderNavbar';
import Footer from './Footer';

import GoogleLogin from "react-google-login";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
function Signup(props) {
    const handleFailure = (result) => {
        alert(result);
    };

    const history = useHistory();

    //const [loginData, setLoginData] = useState(
    //    localStorage.getItem('loginData') + "" != "undefined"
    //        ? JSON.parse(localStorage.getItem('loginData'))
    //        : null
    //);


    const handleLogin = async (googleData) => {
        console.log(googleData.tokenId)
        const res = await axios.post("http://localhost:8081/api/google-login",
            {
                headers: {
                    'Content-Type': 'application/json',
                },

                token: googleData.tokenId,

            }
        );
        /*const res = await fetch('/api/google-login', {
          method: 'POST',
          body: JSON.stringify({
            token: googleData.tokenId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });*/

        const data = await res.rows;
        console.log("dataaa " + JSON.stringify(res.data))
        //setLoginData(res.data);
        localStorage.setItem('loginData', JSON.stringify(res.data));
        history.push('/main');
    };
    return (
        <div>
            {/*navbar*/}
            <HeaderNavbar scFunction={props.scFunction} />
            {/*end navbar*/}
            {/*content-items-login-register,etc*/}

            <div className="container ">
                <div className="row mb-5 mx-5 px-5  justify-content-center">
                    <form className="form-signin bg-white m-5  ">
                        <div className="text-center mb-4">
                            <img src={Person} style={{ width: "100px", height: "100px" }} alt="" className="src" />
                            <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
                        </div>
                        
                        <view style={{
                            alignContent: 'center',
                            justifyContent: 'center', // center the button
                            // the same as the actual button
                            paddingHorizontal: 100 // optionally add some horizontal padding for better looking
                            , padding: "10% 10% 10% 5%"
                        }}>
                            <GoogleLogin style={{ justifyContent: 'center' }}
                                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}

                                onSuccess={handleLogin}
                                onFailure={handleFailure}
                                cookiePolicy={'single_host_origin'}
                            >Continue with Google</GoogleLogin>
                        </view>
                    </form>
                </div>
            </div>
            {/*footer*/}
            <Footer />
        </div>
    );
}

export default Signup;