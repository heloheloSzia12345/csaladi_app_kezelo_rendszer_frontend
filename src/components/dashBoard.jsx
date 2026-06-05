import {useEffect, useState} from "react";
import {deleteUser, updateUser} from "../api/userApi.js";

function DashBoard({selectedUser, onUserChanged}) {
    const [name, setName] = useState("");

    useEffect(() => {
        if(selectedUser){
            setName(selectedUser.name);
        }
    }, [selectedUser]);

    if(selectedUser===null){
        return (<div>Select an user!</div>)
    }

    async function saveFunction() {
        await updateUser(selectedUser.id, {name});
        onUserChanged();
    }

    async function deleteFunction() {
        await deleteUser(selectedUser.id);
        onUserChanged();
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={saveFunction} className="saveButton">Save</button>
            <button onClick={deleteFunction} className="deleteButton">Delete</button>
        </div>
    )
}

export default DashBoard;