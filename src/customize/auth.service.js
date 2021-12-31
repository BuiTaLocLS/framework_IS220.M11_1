import axios from "axios";
import authHeader from "./auth-header"



const addProduct = (ProductName, ProductTypeID, SupplierID, Price) => {
  const API_URL_ADDPRODUCT = "http://localhost:54610/api/Product/Post"

  console.log("API: ",API_URL_ADDPRODUCT)

  return axios.post(API_URL_ADDPRODUCT, 
    { 
    "ProductName": ProductName,
    "ProductTypeID": ProductTypeID,
    "SupplierID": SupplierID,
    "Price": Price
  },
  { headers: authHeader() } 
  );
}

const register = (username, email, password, birthday, gender, address) => {

  const API_URL_REGISTER = "http://localhost:54610/api/User/PostProcedure/" + password

  console.log("API: ",API_URL_REGISTER)

  return axios.post(API_URL_REGISTER, {
    "userName": username,
    "userMail": email,
    "userBirthdate": birthday,
    "userGender": gender,
    "userAddress": address
  });
};

const login = (username, password) => {
  const API_URL = "http://localhost:54610/api/home/login";
  return axios
    .post(API_URL, {
      "accountID": username,
      "accountPassword": password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log("API return:", response.data);
      return response.data;
    });
};

const logout = () => {
  const tmp = ""
  localStorage.removeItem("user");
  localStorage.setItem("listCart", JSON.stringify(tmp))
  localStorage.setItem("user", JSON.stringify(tmp))
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")).user;
};

export default {
  addProduct,
  register,
  login,
  logout,
  getCurrentUser,
};