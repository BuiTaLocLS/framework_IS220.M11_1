import { createContext, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Login from '../components/Login';
import useFetch from '../customize/fetch';
import { AuthContext } from '../contexts/AuthContext';

export const UserContext = createContext()

const LoginForm = () => {
  // let history = useHistory();
  // const { handleSetAuth, setName } = useContext(AuthContext);

  // let userID = -1;

  // const [error, setError] = useState("");


  // const { data: accountList, loading, isError } = useFetch("http://localhost:54610/api/Account/GetAll");

  // // danh sach account hien co

  // const isLogin = false;


  // const login = details => {
  //   console.log("account bd: ", accountList[0].userID);

  //   for (let item in accountList) {
  //     if (details.accountID === accountList[item].accountID && details.accountPassword === accountList[item].accountPassword) {
  //       console.log("complete")

  //       userID = accountList[item].userID;

  //       handleSetAuth(userID);

  //       if (userID != -1) {
  //         handleSetAuth(userID)
  //         sessionStorage.setItem('userID', JSON.stringify(userID));
  //       }

  //       let dataAcount = accountList.filter(item => item.userID == userID)

  //       console.log("dataAcount", dataAcount)
  //       setName(dataAcount[0].accountID);

  //       history.push("/");

  //       break;
  //     }
  //     if (item == accountList[item].length - 1) {
  //       setError("FAIL")
  //     }
  //   }
  //   console.log("session: ", userID);
  // }

  // const logout = details => {
  //   console.log(details);
  // }

  return (
    <Login/>
  );
}

export default LoginForm;
