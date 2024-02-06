import React from 'react';
import MissionsComponents from "../missions/MissionsComponent"

const MissionComponent = ({value}) => {
    return (
        <div>
            <h2>{value.mission_name}</h2>
            <p>{value.launch_year}</p>
            <img
                src={value.links.mission_patch_small}/>
        </div>
    );
};

export default MissionComponent;