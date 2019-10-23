import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EditUser({props}){
    let [userObj, setUserObj] = useState({}) 
    let id = props.match.params.id
    const getUserInfo = async () => {
        let query = `/users/${id}`
        try {
            let response = await axios(query)
            setUserObj({...response.data})
        }catch (error) {console.log(error, "you screwed up")}
    }
    useEffect(()=>{
        getUserInfo()
    },[])
    let [updatedUserFirstName, setUpdatedUserFirstName] = useState(userObj['firstName']);
    let [updatedUserLastName, setUpdatedUserLastName] = useState(userObj['lastName']);
    let [updatedUserAlias, setUpdatedUserAlias] = useState(userObj['alias']);

    const editFirstName = (e) => {setUpdatedUserFirstName(e.target.value)}
    const editLastName = (e) => {setUpdatedUserLastName(e.target.value)}
    const editAlias = (e) => {setUpdatedUserAlias(e.target.value)}
    const submitHandler = async (e) => {
        e.preventDefault();
        // make the call
        let query = `/api/users/${id}/edit`
        let newUserFirstNameObj = {...userObj, 'firstName': updatedUserFirstName}
        let newUserLastNameObj = {...userObj, 'lastName': updatedUserLastName}
        let newUserAliasObj = {...userObj, 'lastName': updatedUserAlias}
        try {
            await axios.put(query, newUserFirstNameObj);
            // setUserObj(newUserObj)
        } catch (err) {console.log(err)}
    }

    let firstNameElem = <input className='input-update-user-description' type='text' onChange={editFirstName} value={updatedUserFirstName}  />
    let lastNameElem = <input className='input-update-user-description' type='text' onChange={editLastName} value={updatedUserLastName}  />
    let aliasElem = <input className='input-update-user-description' type='text' onChange={editAlias} value={updatedUserAlias}  />

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