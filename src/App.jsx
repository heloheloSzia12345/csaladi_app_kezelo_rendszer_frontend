import './App.css'
import {useEffect, useState} from "react";
import {fetchUsers} from "./api/userApi.js";
import UserList from "./components/userList.jsx";
import DashBoard from "./components/dashBoard.jsx";
import PhoneSimulator from "./components/phoneSimulator.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
      async function getAllUsers() {
        const data = await fetchUsers();
        setUsers(data);
      }
      getAllUsers();
      }, []);
  async function reloadUsers() {
    const data = await fetchUsers();
    setUsers(data);
  }

  return (
    <div className="app">
      <div className="left">
        <h1>Family App Manager</h1>
        <UserList users={users} onSelectUser={setSelectedUser} />
        <DashBoard selectedUser={selectedUser} onUserChanged={reloadUsers}/>
      </div>
      <div className="right">
        <PhoneSimulator selectedUser={selectedUser}/>
      </div>
    </div>
  );

}

export default App
