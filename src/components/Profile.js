import React, {useState} from 'react';
import './Profile.scss'

import useFetch from '../customize/fetch';



const Profile = () => {

  const [userID, setUserID] = useState(
    JSON.parse(localStorage.getItem("user")).user.userID
  );
  console.log('userID: ', userID)
  const {data: user, loading, isError} = useFetch(`http://localhost:54610/api/User/GetbyID/${userID}`);

  console.log("user", user)
  let gender = ""
  let birthday = ""
  for(let i in user.userBirthdate){
    if(user.userBirthdate[i] != "T"){
      birthday += user.userBirthdate[i]
    }
    else break;
  }
  console.log(birthday)
  if(user.userGender == 1){
    gender += "Nam"
  }
  else{
    gender +="Nữ"
  }
  

  return (
    <div className="container emp-profile card" >
     
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="" />
              
            </div>
          </div>
          <div className="col-md-8 mt-4">
            <div className="profile-head">
              <h5>
                {user.userName}
              </h5>
              
              
              <ul className="nav nav-tabs mt-5" id="myTab" role="tablist">
                <li className="nav-item">
                  <h5>Thông tin</h5>
                </li>
              </ul>
          <div >
            <div className="tab-content profile-tab" id="myTabContent">
              

                <div className="row">
                  <div className="col-md-4">
                    <label>Email</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user.userMail}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Giới tính</label>
                  </div>
                  <div className="col-md-8">
                    <p>{gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Ngày sinh </label>
                  </div>
                  <div className="col-md-8">
                    <p>{birthday}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <label>Địa chỉ</label>
                  </div>
                  <div className="col-md-8">
                    <p>{user.userAddress}</p>
                  </div>
                </div>
              
            </div>
          </div>
            </div>
          </div>
          
        </div>
        <div className="row">
          
        </div>
         
    </div>

  );
}

export default Profile;

{/* <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.userMail}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Giới tính</label>
                  </div>
                  <div className="col-md-6">
                    <p>{gender}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Ngày sinh </label>
                  </div>
                  <div className="col-md-6">
                    <p>{birthday}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Địa chỉ</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.userAddress}</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}