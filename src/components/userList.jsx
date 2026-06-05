import {useState} from "react";
import {createUser} from "../api/userApi.js";
import {createBackground} from "../api/backgroundApi.js";

function UserList({ users, onSelectUser, onUserAdded, onBackgroundAdded }) {
    const [newUserName, setNewUserName] = useState("");
    const [newBackgroundName, setNewBackgroundName] = useState("");

    const handleAddUser = async () => {
        await createUser({ name: newUserName });
        setNewUserName("");
        onUserAdded();
    };

    const handleAddBackground = async () => {
        await createBackground({name: newBackgroundName});
        setNewBackgroundName("");
        onBackgroundAdded();
    };

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => onSelectUser(user)}>{user.name}</li>
                ))}
            </ul>
            <div>
                <input
                    placeholder="New user name..."
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                />
                <button onClick={handleAddUser} className="saveButton" style={{ marginTop: 0 }}>
                    + Add
                </button>
            </div>
            <div>
                <input
                    placeholder="New Background name..."
                    value={newBackgroundName}
                    onChange={(e) => setNewBackgroundName(e.target.value)}
                />
                <button onClick={handleAddBackground} className="saveButton" style={{ marginTop: 0 }}>
                    + Add
                </button>
            </div>
        </div>
    );
}
export default UserList;