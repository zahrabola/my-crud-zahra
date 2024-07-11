import React from 'react';

const UserActions = ({userData}) => {
    return (
        <div>
            <button className='btn btn-success' onClick={() => console.log(userData.id)}>
            <i className='pi pi-eye'></i>
            </button>
            <button className='btn btn-primary'  onClick={() => console.log(userData.id)} >
            <i className='pi pi-file-edit'  ></i>
            </button>
            <button className='btn btn-danger'  onClick={() => console.log(userData.id)}>
            <i className='pi pi-trash'></i>
            </button>
        </div>
    );
}

export default UserActions;
