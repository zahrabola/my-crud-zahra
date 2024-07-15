import React, { useEffect, useState } from "react";
import axios from "axios";

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

const AddUser = (props) => {
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    
  useEffect(() => {
  }, []);

  const addNewUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/users/",userInfo
      );
      if (response) {
        console.log(response.data);
        props.setNewUserAdded()
      }
    } catch (error) {
      console.log(error);
    }
  };

    return (
        <div>
        <strong className="dialogheader">Add New User</strong>
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
}

export default AddUser;
