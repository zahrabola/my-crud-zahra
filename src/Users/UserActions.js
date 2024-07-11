import React from 'react';

const UserActions = () => {
    return (
        <div>
            <button className='btn btn-success'>
            <i className='pi pi-eye'></i>
            </button>
            <button className='btn btn-primary'>
            <i className='pi pi-file-edit'></i>
            </button>
            <button className='btn btn-danger'>
            <i className='pi pi-trash'></i>
            </button>
        </div>
    );
}

export default UserActions;
