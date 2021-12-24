import { createContext, useState, useEffect } from 'react'
import Login from '../components/Login';
import useFetch from '../customize/fetch';


export const UserContext = createContext()

const LoginForm = () => {

  let userID = -1;
  const [error, setError] = useState("");
  

  const {data: accountList, loading, isError} = useFetch("http://localhost:54610/api/Account/GetAll");

  // danh sach account hien co

  const isLogin = false;
  

  const login = details => {
    console.log("account bd: ", accountList[0].userID);
    
    for(let item in accountList){
      if(details.accountID === accountList[item].accountID && details.accountPassword === accountList[item].accountPassword){
        console.log("complete")
        
        userID = accountList[item].userID

        if(userID != -1){
    
          sessionStorage.setItem('userID', JSON.stringify(userID));
        
      }

        window.location.href = "http://localhost:3000/"; 
        
        break;
      }
      if(item == accountList[item].length - 1){
        setError("FAIL")
      }
    }
    console.log("session: ",userID);
  }

  const logout = details => {
    console.log(details);
  }
  
  return (
     <Login login={login} error={error} />
  );
}

export default LoginForm;
