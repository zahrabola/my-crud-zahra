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

  useEffect(() => {}, []);

  const addNewUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/users/",
        userInfo
      );
      if (response) {
        console.log(response.data);
        props.setNewUserAdded();
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
                <input
                  type="text"
                  className="formcontrol"
                  placeholder="Enter Full name"
                  value={userInfo.name}
                />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Username:</span>
                <input
                  type="text"
                  className="formcontrol"
                  placeholder="Enter UserName"
                  value={userInfo.username}
                />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Email Address:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Email Address"
                 value={userInfo.email}
                 />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Phone Number:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Phone Number"
                 value={userInfo.phone}
                 />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Website:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Website"
                 value={userInfo.website}
                 />
              </p>
            </div>
          </div>
        </div>
        {/* Address */}
        <h1>User Address</h1>
        <div className="box">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <p>
                <span>City:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter City"
                 value={userInfo.address.city}
                 />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Street:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Street Name"
                 value={userInfo.address.street}
                 />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Suite:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Suite"
                 value={userInfo.address.suite}
                 />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>ZIP Code:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter ZipCode"
                 value={userInfo.address.zipcode}
                 />
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
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Company Name"
                 value={userInfo.company.name}
                 />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>Catch Phrase:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Company Catch Phrase"
                 value={userInfo.company.catchPhrase}
                 />
              </p>
            </div>
            <div className="col-sm-12 col-md-6">
              <p>
                <span>BS:</span>
                <input type="text"
                 className="formcontrol"
                 placeholder="Enter Company BS"
                 value={userInfo.company.bs}
                 />
              </p>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
