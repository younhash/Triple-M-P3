import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function EditUser({props}){
    let [userObj, setUserObj] = useState({}) 
    let id = props.match.params.id
    const getUserInfo = async () => {
        let query = `/api/users/${id}`
        try {
            let response = await axios(query)
            setUserObj({...response.data})
        }catch (error) {console.log(error, "you screwed up")}
    }

    useEffect(()=>{
        getUserInfo();
    },[])

    let [newFirstName, setNewFirstName] = useState(userObj['firstName']);
    let [newLastName, setNewLastName] = useState(userObj['lastName']);
    let [newAlias, setNewAlias] = useState(userObj['alias']);

    const submitHandler = async (e) => {
        e.preventDefault();
        // make the call
        let query = `/api/users/${id}/edit`
        let newUserObj = {'firstName':newFirstName, 'lastName': newLastName, 'alias':newAlias}
        try {
            let resp = await axios.put(query, newUserObj);
            console.log(resp);
        } catch (err) {console.log(err)}
    }

    let firstNameElem = <input className='input-update-user-description' type='text' onChange={(e) => {setNewFirstName(e.target.value)}} value={newFirstName}  />
    let lastNameElem = <input className='input-update-user-description' type='text' onChange={(e) => {setNewLastName(e.target.value)}} value={newLastName}  />
    let aliasElem = <input className='input-update-user-description' type='text' onChange={(e) => {setNewAlias(e.target.value)}} value={newAlias}  />

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