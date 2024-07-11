import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const Users = () => {
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
