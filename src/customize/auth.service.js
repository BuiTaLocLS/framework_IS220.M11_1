import axios from "axios";

const API_URL = "http://localhost:54610/api/home/login";

const register = (username, email, password, birthday, gender, address) => {

  const API_URL_REGISTER = "http://localhost:54610/api/User/PostProcedure/" + password

  console.log("API: ",API_URL_REGISTER)

  const BODY_POST = {
    "userName": username,
    "userMail": email,
    "userBirthdate": birthday,
    "userGender": gender,
    "userAddress": address
  }
  console.log("BODY: ", BODY_POST)

  return axios.post(API_URL_REGISTER, {
    "userName": username,
    "userMail": email,
    "userBirthdate": birthday,
    "userGender": gender,
    "userAddress": address
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL, {
      "accountID": username,
      "accountPassword":password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log("API return:" , response.data);
      return response.data;
    });
};

const logout = () => {
  const tmp = ""
  localStorage.removeItem("user");
  localStorage.setItem("user", JSON.stringify(tmp))
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")).user;
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};