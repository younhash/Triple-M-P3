import React, {useState} from 'react';
import axios from 'axios';

export default function EditUser({userObj, setUserObj}){
    let [updatedUserDesc, setUpdatedUserDesc] = useState(userObj['summary']);

    const editDescription = (e) => {setUpdatedUserDesc(e.target.value)}
    const submitHandler = async (e) => {
        e.preventDefault();
        // make the call
        let query = `/api/users/${userObj.id}/edit`
        let newUserObj = {...userObj, 'summary': updatedUserDesc}
        try {
            await axios.put(query, newUserObj);
            setUserObj(newUserObj)
        } catch (err) {console.log(err)}
    }
    
    let firstNameElem = <input className='input-update-user-description' type='text' onChange={editDescription} value={updatedUserDesc}  />
    let lastNameElem = <input className='input-update-user-description' type='text' onChange={editDescription} value={updatedUserDesc}  />
    let aliasElem = <input className='input-update-user-description' type='text' onChange={editDescription} value={updatedUserDesc}  />

    return(
        <div className='user-edit'>
            <div className='user-edit-card' >
                <form onSubmit={submitHandler} >
                    {firstNameElem}
                    {lastNameElem}
                    {aliasElem}
                </form>
            </div>
        </div>
    )
}