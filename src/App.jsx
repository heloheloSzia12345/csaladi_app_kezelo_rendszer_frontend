import './App.css'
import {useEffect, useState} from "react";
import {fetchUsers} from "./api/userApi.js";
import UserList from "./components/userList.jsx";
import DashBoard from "./components/dashBoard.jsx";
import PhoneSimulator from "./components/phoneSimulator.jsx";
import {fetchBackgrounds} from "./api/backgroundApi.js";

function App() {
  const [users, setUsers] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
      async function getAllData() {
        const [usersData, backgroundsData] = await Promise.all([fetchUsers(), fetchBackgrounds()]);
        setUsers(usersData);
        setBackgrounds(backgroundsData);
      }
      getAllData();
      }, []);
  async function reloadUsers() {
    const data = await fetchUsers();
    setUsers(data);
  }

  async function reloadBackgrounds() {
      const data = await fetchBackgrounds();
      setBackgrounds(data);
  }

  return (
    <div className="app">
      <div className="left">
        <h1>Family App Manager</h1>
        <UserList users={users} onSelectUser={setSelectedUser} onUserAdded={reloadUsers} onBackgroundAdded={reloadBackgrounds} />
        <DashBoard selectedUser={selectedUser} onUserChanged={reloadUsers} backgrounds={backgrounds} />
      </div>
      <div className="right">
        <PhoneSimulator selectedUser={selectedUser}/>
      </div>
    </div>
  );

}

export default App
