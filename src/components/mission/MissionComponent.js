import React from 'react';
import MissionsComponents from "../missions/MissionsComponent"
import css from './mission.module.css'

const MissionComponent = ({value}) => {
    return (
        <div className={css.mission}>
        <div>
            <h2>{value.mission_name}</h2>
            <p>{value.launch_year}</p>
            <img
                src={value.links.mission_patch_small}/>
        </div>
        </div>
    );
};

export default MissionComponent;