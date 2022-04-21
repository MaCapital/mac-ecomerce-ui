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
function UserManager() {

  const [load, setLoad] = useState(0);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      let responseDataw;
      await axios.get("http://localhost:8081/user?")
        .then((responsew) => responseDataw = responsew.data);
      console.log(responseDataw)
      fillItemsRows(responseDataw);
    }
    getUsers();

  }, [load]);

  const fillItemsRows = (data) => {
    let counter = 0;
    let itemsList = [];
    data.forEach(item_ => {
      counter++;
      itemsList.push(
        <tr key={counter}>
          <th scope="row">{counter}</th>
          <td>{item_.userid}</td>
          <td>{item_.username}</td>
          <td>{item_.email}</td>
          <td>{item_.usertype}</td>
          <td>
            {/* Call to action buttons */}
            <label className="text-success " type="button" data-toggle="tooltip" data-placement="top" title="click on to change" onClick={() => handleChangeType(item_.email, 1)} >Customer</label>
          </td>
          <td>
            {/* Call to action buttons */}
            <label className="text-info " type="button" data-toggle="tooltip" data-placement="top" title="click on to change" onClick={() => handleChangeType(item_.email, 2)} >Seller</label>
          </td>
        </tr>
      )
    });
    setUsers(itemsList);
  }

  const handleChangeType = async (email, type) => {

    console.log('update' + email, type)
    //http://localhost:8081/userupdate?email=ymacusayaa@fcpn.edu.bo&type=1
    const res_userChange = await axios.put("http://localhost:8081/userupdate?email=" + email + "&type=" + type);
    console.log(res_userChange);
    const load_ = load + 1
    setLoad(load_);
  }
  return (
    <div>
      {/*navbar*/}
      <HeaderNavbar />
      {/*end navbar*/}
      {/*content-items-login-register,etc*/}

      <section className="pb-5 header text-center">
        <div className="container py-5 ">
          <div >
            <h1 className='display-6'>List of Users</h1>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto" >
              <div className="card border-0 shadow" >
                <div className="card-body p-5" >
                  {/* Responsive table */}
                  <div className="table-responsive" >
                    <table className="table m-0">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">id</th>
                          <th scope="col">nombre</th>
                          <th scope="col">email</th>
                          <th scope="col">rol</th>
                          <th scope="col">Cambiar a usuario</th>
                          <th scope="col">Cambiar a usuario Gerencial</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/*footer*/}
      <Footer />

    </div>
  );
}

export default UserManager;