import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import UserActions from "./UserActions";
import { Dialog } from "primereact/dialog";
import ViewUsers from "./ViewUsers";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";

///http://localhost:4000/users

const Users = () => {
  const [userslist, setUsersList] = useState([
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

  const [showViewPage, setShowViewPage] = useState(false);
  const [selectedIdUser, setSelectedIdUser] = useState(null);
  const [showAddPage, setShowAddPage] = useState(false);
  const [showEditPage, setShowEditPage] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);

  //getting user from json
  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/users");
      if (response) {
        //console.log(response);
        setUsersList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const actionsTemplate = (rowDate) => {
    return (
      <UserActions
        /*userData={rowDate}*/ userData={{ id: rowDate.id, ...rowDate }}
        setShowViewPage={setShowViewPage}
        setSelectedIdUser={setSelectedIdUser}
        setShowEditPage={setShowEditPage}
        deleteUserConfirm={deleteUserConfirm}
      />
    );
  };

  //confirm Dialog - https://primereact.org/confirmdialog/#import

  const deleteUserConfirm = () => {
    confirmDialog({
      message: (
        <div style={{ padding: "20px", margin: "0" }}>
          {"Are you sure you want to delete this user?"}
        </div>
      ),
      header: (
        <div style={{ padding: "20px", margin: "0" }}>
          <h2>Confirmation</h2>
        </div>
      ),
      icon: "pi pi-trash",
    });
  };

  return (
    <div className="userspage">
      <div className="container">
        <h1>Crud Operation</h1>
        <h3>React, Prime React, Json Server and Axios</h3>
        <div className="userslist p-4">
          <div className="addNewUser">
            <button
              className="btn btn-success"
              onClick={() => setShowAddPage(true)}
            >
              Add New User <i className="pi pi-plus"></i>
            </button>
          </div>
          <DataTable value={userslist} stripedRows>
            <Column field="name" header="Name" className="p-2"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="email" header="Email Adress"></Column>
            <Column field="phone" header="Phone Number"></Column>
            <Column field="website" header="Website"></Column>
            <Column header="Actions" body={actionsTemplate}></Column>
          </DataTable>
        </div>
      </div>
      <div>
        <Dialog
          visible={showViewPage}
          style={{ width: "70vw" }}
          onHide={() => setShowViewPage(false)}
        >
          <ViewUsers userId={selectedIdUser} />
        </Dialog>
        <Dialog
          visible={showAddPage}
          style={{ width: "70vw" }}
          onHide={() => setShowAddPage(false)}
        >
          <AddUser
            setNewUserAdded={() => {
              setShowAddPage(false);
              getAllUsers();
            }}
          />
        </Dialog>
        <Dialog
          visible={showEditPage}
          style={{ width: "70vw" }}
          onHide={() => setShowEditPage(false)}
        >
          <EditUser
            userId={selectedIdUser}
            setUserEdited={() => {
              setShowEditPage(false);
              getAllUsers();
            }}
          />
        </Dialog>

        <ConfirmDialog className="confirmdialog"/>
      </div>
    </div>
  );
};

export default Users;
