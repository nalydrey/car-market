import React, {useEffect, useState} from 'react';
import UserCard from "../userCard/UserCard";
import './Users.scss'
import axios from "axios";
import {url} from "../../../../App";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get(url+`users?isAdmin=false`).then(resp => setUsers(resp.data))
    },[])

    const deleteUser = (userId) => {
        console.log(userId)
        axios.delete(url+`users/${userId}`).then(resp => axios.get(url+`users?isAdmin=false`).then(resp => setUsers(resp.data)))
    }

    console.log(users)
    return (
        <div className='clients'>
            {users.map((user)=>{
                return < UserCard deleteUser={deleteUser} user={user}/>
            }) }
        </div>
    );
};

export default Users;