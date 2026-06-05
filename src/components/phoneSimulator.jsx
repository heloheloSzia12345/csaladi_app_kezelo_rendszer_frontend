import {useEffect, useState} from "react";
import {createIcon, deleteIcon, updateIcon} from "../api/iconApi.js";

function PhoneSimulator({selectedUser, icons, applications, onIconsChanged}) {
    const [activeApp, setActiveApp] = useState(null);

    /////////////////////////////////////////////////////////////////////
    const [newIconName, setNewIconName] = useState("");
    const [newIconAppId, setNewIconAppId] = useState("");
    const [editingIconNames, setEditingIconNames] = useState({});
    /////////////////////////////////////////////////////////////////////

    const iconClick = (icon) => {
        setActiveApp(getAppName(icon));
    }

    const getAppName = (icon) => {
        const app = applications.find(a => a.id === icon.applicationId);
        return app ? app.name : 'Unknown';
    };

    useEffect(() => {
        setActiveApp(null);
    }, [selectedUser]);

    if(selectedUser===null){
        return (<div>Select user to start the simulator!</div>)
    }

    /////////////////////////////////////////////////////////////////////
    const handleAddIcon = async () => {
      if(!newIconAppId)  return;
      await createIcon({name: newIconName, applicationId: newIconAppId, menuId: selectedUser.menuId});
      setNewIconName("");
      setNewIconAppId("");
      onIconsChanged();
    };

    const handleDeleteIcon = async (iconId) => {
      await deleteIcon(iconId);
      onIconsChanged();
    };

    const handleUpdateIcon = async (icon) => {
        const updatedName = editingIconNames[icon.id];
        if (!updatedName || !updatedName.trim()) return;
        await updateIcon(icon.id, { name: updatedName, applicationId: icon.applicationId, menuId: icon.menuId });
        setEditingIconNames(prev => { const copy = {...prev}; delete copy[icon.id]; return copy; });
        onIconsChanged();
    };
    /////////////////////////////////////////////////////////////////////

    const userIcons = icons.filter(icon => icon.menuId === selectedUser.menuId);

    return (
        <div className={"simulatorContainer"}>
            <div className="simulator">
                <h3>{selectedUser.name}</h3>
                {activeApp === null ? (
                    <div className="apps">
                        {userIcons.map((icon) => (
                            <div key={icon.id} onClick={() => iconClick(icon)}>
                                <div>{icon.name}</div>
                            </div>))}
                        <div onClick={() => setActiveApp("Settings")}>
                            <div><h4>Settings</h4></div>
                        </div>
                    </div>
                ) : activeApp === "Settings" ? (

                    /////////////////////////////////////////////////////////////////////
                    <div className="appView">
                        <h4 style={{color: "#1c110e"}}>Settings</h4>
                        {userIcons.map(icon => (
                            <div key={icon.id}>
                                <input
                                    value={editingIconNames[icon.id] !== undefined ? editingIconNames[icon.id] : icon.name}
                                    onChange={(e) => setEditingIconNames({...editingIconNames, [icon.id]: e.target.value})}
                                />
                                <button onClick={() => handleUpdateIcon(icon)}>Save</button>
                                <button onClick={() => handleDeleteIcon(icon.id)}>X</button>
                            </div>
                        ))}
                        <div>
                            <input placeholder="Icon name..." value={newIconName} onChange={(e) => setNewIconName(e.target.value)} />
                            <select value={newIconAppId} onChange={(e) => setNewIconAppId(e.target.value)}>
                                <option value="">Select App...</option>
                                {applications.map(app => <option key={app.id} value={app.id}>{app.name}</option>)}
                            </select>
                            <button onClick={handleAddIcon}>+ Add Icon</button>
                        </div>
                        <button onClick={() => setActiveApp(null)} style={{marginTop:'12px'}}>Back to home</button>
                    </div>
                    /////////////////////////////////////////////////////////////////////

                ) : (
                    <div className="appView">
                        <h4>Active app: {activeApp}</h4>
                        <button onClick={() => setActiveApp(null)}>Back to home</button>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default PhoneSimulator;