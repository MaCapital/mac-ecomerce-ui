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
import { useEffect, useState } from 'react';
import axios from 'axios';
function Help() {


    return (
        <div>
            {/*navbar*/}
            <HeaderNavbar />
            {/*end navbar*/}
            {/*content-items-login-register,etc*/}

            <div class="container m-5 p-5">
                <h1 class="mt-5">Do you need help?</h1>
                <p class="lead">Please contact us at our personal email to attend these cases.</p>
                <p>Mandenos un  <a href="mailto:macusayamacusaya@gmail.com">correo</a> si lo cree necesario.</p>
            </div>
            <div class="container m-5 p-5 ">
                <h1 class="m-5"></h1>

            </div>

            {/*footer*/}
            <Footer />

        </div>
    );
}

export default Help;