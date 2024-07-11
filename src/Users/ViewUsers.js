import React, { useEffect, useState } from "react";
import axios from "axios";

const initialUserInfo = {
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    address: {
        city: '',
        street: '',
        suite: '',
        zipcode: ''
    },
    company: {
        name: '',
        catchPhrase: '',
        bs: ''
    }
}

const ViewUsers = (props) => {
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/users/" + props.userId
      );
      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <strong className="dialogheader">View User Data</strong>
      <div className="userview ">{props.userId}</div>
    </div>
  );
};

export default ViewUsers;
