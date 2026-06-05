import {useEffect, useState} from "react";
import {deleteUser, updateUser} from "../api/userApi.js";
import {fetchThemes} from "../api/themeApi.js";

function DashBoard({selectedUser, onUserChanged, backgrounds}) {
    const [name, setName] = useState("");
    const [themes, setThemes] = useState([]);

    const [themeId, setThemeId] = useState("");
    const [backgroundId, setBackgroundId] = useState("");

    useEffect(() => {
        async function loadOptions() {
            const themesData = await fetchThemes();
            setThemes(themesData);
        }
        loadOptions();
    }, []);


    useEffect(() => {
        if(selectedUser){
            setName(selectedUser.name);
            setThemeId(selectedUser.themeId || "");
            setBackgroundId(selectedUser.backgroundId || "");
        }
    }, [selectedUser]);

    if(selectedUser===null){
        return (<div>Select an user!</div>)
    }

    async function saveFunction() {
        await updateUser(selectedUser.id, {
            name: name,
            themeId:themeId || null,
            backgroundId:backgroundId || null,
            menuId:selectedUser.menuId || null
        });
        onUserChanged();
    }

    async function deleteFunction() {
        await deleteUser(selectedUser.id);
        onUserChanged();
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <div>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Modify user name..." />
                <div>
                    <label>Theme:</label>
                    <select value={themeId} onChange={(e) => setThemeId(e.target.value)}>
                        <option>No theme</option>
                        {themes.map(theme => <option key={theme.id} value={theme.id}>{theme.name}</option>)}
                    </select>
                </div>
                <div>
                    <label>Background:</label>
                    <select value={backgroundId} onChange={(e) => setBackgroundId(e.target.value)}>
                        <option>No background</option>
                        {backgrounds.map(background => <option key={background.id} value={background.id}>{background.name}</option>)}
                    </select>
                </div>
            </div>

            <button onClick={saveFunction} className="saveButton">Save</button>
            <button onClick={deleteFunction} className="deleteButton">Delete</button>
        </div>
    )
}

export default DashBoard;