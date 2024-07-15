import React, { useEffect, useState } from "react";
import axios from "axios";

const initialUserInfo = {
    id: '', /*  id string*/
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

const EditUser = (props) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);



  useEffect(() => {
    setUserInfo({ ...userInfo,id: props.userId})
    fetchUserData();
     // eslint-disable-next-line
}, []);



  const fetchUserData = async () => {
    try {
      const response = await axios.get(
     'http://localhost:4000/users/' + props.userId
      );
      if (response) {
        console.log(response.data);
        setUserInfo(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editExisitingUser = async () => {
    try {
      const response = await axios.put(
        'http://localhost:4000/users/' + props.userId, userInfo
      );
      if (response) {
       console.log(response.data);
        props.setUserEdited();
      }
    } catch (error) {
      console.log(error);
    }
  };



  return   <div>
  <strong className="dialogheader">Edit Exisiting User</strong>
  <div className="userview ">
  userid:  {props.userId} 
   
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
              onChange={(event) =>
                setUserInfo({ ...userInfo, name: event.target.value })
              }
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
              onChange={(event) =>
                setUserInfo({ ...userInfo, username: event.target.value })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>Email Address:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Email Address"
              value={userInfo.email}
              onChange={(event) =>
                setUserInfo({ ...userInfo, email: event.target.value })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>Phone Number:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Phone Number"
              value={userInfo.phone}
              onChange={(event) =>
                setUserInfo({ ...userInfo, phone: event.target.value })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>Website:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Website"
              value={userInfo.website}
              onChange={(event) =>
                setUserInfo({ ...userInfo, website: event.target.value })
              }
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
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter City"
              value={userInfo.address.city}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  address: {
                    ...userInfo.address,
                    city: event.target.value,
                  },
                })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>Street:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Street Name"
              value={userInfo.address.street}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  address: {
                    ...userInfo.address,
                    street: event.target.value,
                  },
                })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>Suite:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Suite"
              value={userInfo.address.suite}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  address: {
                    ...userInfo.address,
                    suite: event.target.value,
                  },
                })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>ZIP Code:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter ZipCode"
              value={userInfo.address.zipcode}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  address: {
                    ...userInfo.address,
                    zipcode: event.target.value,
                  },
                })
              }
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
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Company Name"
              value={userInfo.company.name}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  company: {
                    ...userInfo.company,
                    name: event.target.value,
                  },
                })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>Catch Phrase:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Company Catch Phrase"
              value={userInfo.company.catchPhrase}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  company: {
                    ...userInfo.company,
                    catchPhrase: event.target.value,
                  },
                })
              }
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-6">
          <p>
            <span>BS:</span>
            <input
              type="text"
              className="formcontrol"
              placeholder="Enter Company BS"
              value={userInfo.company.bs}
              onChange={(event) =>
                setUserInfo({
                  ...userInfo,
                  company: {
                    ...userInfo.company,
                    bs: event.target.value,
                  },
                })
              }
            />
          </p>
        </div>
      </div>
    </div>

    <button className="btn btn-success" onClick={() => editExisitingUser()} >
    Edit User
    </button>
  </div>
</div>;
};

export default EditUser;
