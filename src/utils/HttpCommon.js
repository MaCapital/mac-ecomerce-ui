import axios from "axios";

async function getData() { 
    let responseData;
    await axios.get("http://localhost:8081/items")
      .then((response) => responseData = response.data);
    console.log(responseData);
    return responseData;
}

export default getData;