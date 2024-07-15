import React, { useEffect, useState } from "react";
import axios from "axios";
/* https://www.youtube.com/watch?v=c1MunmL1a2Q&list=PLxU1KfxEWF_HI571_84l09RSaj2g-qhjs&index=7 */

const initialUserInfo = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  address: {
    city: "",
    street: "",
    suite: "",
    zipcode: "",
  },
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const ViewUsers = (props) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  /*
  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/users/" + props.userId
      );
      if (response) {
        //console.log(response.data);
        setUserInfo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
*/

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(
          "http://localhost:4000/users/" + props.userId
      );
      if (response) {
        setUserInfo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchData(); // Call the function inside the effect
}, [props.userId]);

  return (
    <div>
      <strong className="dialogheader">View User Data</strong>
      <div className="userview ">
        {props.userId}
        <h1>Basic Information</h1>
        <div className="box">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Full Name:</span>
                <span>{userInfo.name}</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Username:</span>
                <span>{userInfo.username}</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Email Address:</span>
                <span>{userInfo.email}</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Phone Number:</span>
                <span>{userInfo.phone}</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Website:</span>
                <span>{userInfo.website}</span>
              </p>
            </div>
          </div>
        </div>
        {/* Address */}
        <h1>User Address</h1>
            <div className='box'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>City:</span>
                            <span>{userInfo.address.city}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Street:</span>
                            <span>{userInfo.address.street}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Suite:</span>
                            <span>{userInfo.address.suite}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>ZIP Code:</span>
                            <span>{userInfo.address.zipcode}</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Company */}
        <h1>User Company </h1>
        <div className="box">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Company Name:</span>
                <span>{userInfo.company.name}</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Catch Phrase:</span>
                <span>{userInfo.company.catchPhrase}</span>
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>BS:</span>
                <span>{userInfo.company.bs}</span>
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUsers;
//http://localhost:4000/users
