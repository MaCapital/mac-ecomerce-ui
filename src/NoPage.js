import { useState } from "react";
import GoogleLogin from "react-google-login";
import axios from 'axios';


function NoPage() {



  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')+"" != "undefined"
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

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
    setLoginData(res.data);
    localStorage.setItem('loginData', JSON.stringify(res.data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div>
          {loginData ? (
            <div>
              <h3>You logged in as {loginData.email}</h3>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
        </div>
      </header>
    </div>
  );
}

export default NoPage;