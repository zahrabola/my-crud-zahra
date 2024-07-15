import React from "react";

const UserActions = ({
  userData,
  setShowViewPage,
  setSelectedIdUser,
  setShowEditPage,
  deleteUserConfirm
}) => {
  return (
    <div>
      <button
        className="btn btn-success"
        onClick={() => {
          /*console.log(userData.id);*/
          setSelectedIdUser(userData.id);
          setShowViewPage(true);
        }}
      >
        <i className="pi pi-eye"></i>
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          /*console.log(userData.id);*/
          setSelectedIdUser(userData.id);
          setShowEditPage(true);
        }}
      >
        <i className="pi pi-file-edit"></i>
      </button>
      <button
        className="btn btn-danger"
        onClick={() => deleteUserConfirm(userData.id)}
      >
        <i className="pi pi-trash"></i>
      </button>
    </div>
  );
};

export default UserActions;
