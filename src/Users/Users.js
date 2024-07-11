import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
///http://localhost:4000/users
const Users = () => {
  const [users, setUsersList] = useState([
    /*

    {
        id: "1",
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    } */
  ]);

  useEffect(() => {
    getAllUsers();
  }, []);


  //getting user from json
  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      if (response) {
       /// console.log(response);
       setUsersList(response.data)
      }
    } catch (error) {}
  };

  return (
    <div className="userspage">
      <div className="container">
        <h1>Crud Operation</h1>
        <h3>React, Prime React, Json Server and Axios</h3>
        <div className="userslist">
          <DataTable value={users}  stripedRows   >
            <Column field="name" header="Name" className="p-2" ></Column>
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email Adress"></Column>
            <Column field="phone" header="Phone Number"></Column>
            <Column field="website" header="Website"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default Users;
