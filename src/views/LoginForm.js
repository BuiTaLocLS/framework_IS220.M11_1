import { createContext, useState, useEffect } from 'react'
import Login from '../components/Login';
import useFetch from '../customize/fetch';


export const UserContext = createContext()

const LoginForm = () => {

  const [accountID, setAccountID] = useState({accountID: ""});
  const [error, setError] = useState("");

  const accountList = {
    accountID: "a",
    accountPassword: "a"
  }

  const login = details => {
    for(let item = 0; item < accountList.accountID.length; item++){
      if(details.accountID === accountList.accountID[item] && details.accountPassword === accountList.accountPassword[item]){
        console.log("complete");
        
        setAccountID({
          accountId: details.accountID
        })
        break;
      }
      if(item == accountList.accountID.length - 1){
        setError("FAIL")
      }
    }
    console.log(details);
  }

  const logout = details => {
    console.log(details);
  }
  
  return (
     <Login login={login} error={error}/>
  );
}

export default LoginForm;
