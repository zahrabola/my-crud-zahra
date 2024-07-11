import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Users = () => {
 const [users] = useState([

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
    }
 ])









 
  return (
    <div className="userspage">
      <div className="container">
        <h1>Crud Operation</h1>
        <h3>React, Prime React, Json Server and Axios</h3>
        <div className="userslist">
          <DataTable value={users}>
            <Column field="name" header="Name"></Column>
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
