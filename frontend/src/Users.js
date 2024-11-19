import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import Axios from 'axios';
import { useEffect, useState } from "react";


const Users = () => {

    const [usersarray, setusersarray] = useState([]);
    const [subimitted, setSubmitted] = useState(false);
    const  [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        getUsers();
    }, []);






    //getuser function
    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response =>{
                setusersarray(response?.data?.response || []);
            })
            .catch(error => {
                console.error("Axios error: " , error);
            });
    }





    //adduser function
    const addUser = (usersarray) => {
        setSubmitted(true);
        const payload = {
            id: usersarray.id,
            name: usersarray.name,
        }
        Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() =>{
            getUsers();
            setSubmitted(false);
            isEdit(false);
        })
        .catch(error => {
            console.error("Axios error: " , error);
        });
    }




    //updateuser function
    const updateUser = (usersarray) => {
        setSubmitted(true);
        const payload = {
            id: usersarray.id,
            name: usersarray.name,
        }
        Axios.post('http://localhost:3001/api/updateUser', payload)
        .then(() =>{
            getUsers();
            setSubmitted(false);
            isEdit(false);
        })
        .catch(error => {
            console.error("Axios error: " , error);
        });
    }





    //deleteuser function
    const deleteUser = (data) => {
        Axios.post('http://localhost:3001/api/deleteuser', data)
        .then(() =>{
            getUsers();
        })
        .catch(error => {
            console.error("Axios error: " , error);
        });
    }


    return(
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
                width: '100%',
            }}
        >
            <UserForm 
                adduserprop={addUser}  
                subimittedprop={subimitted}    
                selectedUserDataprop={selectedUser} 
                isEditprop={isEdit} 
                updateUserprop ={updateUser}/>
            <UserTable 
                rows={usersarray} 
                selectedUserprop={data => {setSelectedUser(data); setIsEdit(true);}} 
                deleteUserprop={data =>window.confirm('Are you sure do you want to delete!') && deleteUser(data)}/>
        </Box>
    );
}

export default Users;