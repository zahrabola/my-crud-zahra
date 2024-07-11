import React, { useEffect } from "react";
import axios from "axios";

const ViewUsers = (props) => {


  useEffect(() => {
    fetchUserData()
  }, []);


  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users/' + props.userId);
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
