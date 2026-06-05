import {useEffect, useState} from "react";
import {fetchIcons} from "../api/iconApi.js";
import {fetchApplications} from "../api/applicationApi.js";

function PhoneSimulator({selectedUser}) {
    const [icons, setIcons] = useState([]);
    const [activeApp, setActiveApp] = useState(null);
    const [applications, setApplications] = useState([]);

    const iconClick = (icon) => {
        setActiveApp(getAppName(icon));
    }

    const getAppName = (icon) => {
        const app = applications.find(a => a.id === icon.applicationId);
        return app ? app.name : 'Unknown';
    };

    useEffect(() => {
        async function getAllData(){
            if(selectedUser===null || selectedUser.menuId===null){
                setIcons([]);
                setApplications([]);
            } else {
                const [iconsData, appsData] = await Promise.all([fetchIcons(), fetchApplications()]);
                setIcons(iconsData.filter(icon => icon.menuId===selectedUser.menuId));
                setApplications(appsData);
            }
        }
        getAllData();
        setActiveApp(null);
    },[selectedUser]);

    if(selectedUser===null){
        return (<div>Select user to start the simulator!</div>)
    }

    return (
        <div className={"simulatorContainer"}>
            <div className="simulator">
                <h3>{selectedUser.name}</h3>
                {activeApp === null ? (
                    <div className="apps">
                        {icons.map((icon) => (
                            <div key={icon.id} onClick={() => iconClick(icon)}>
                                <div>{getAppName(icon)}</div>
                            </div>))}
                    </div>
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