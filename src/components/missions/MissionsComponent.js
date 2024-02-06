import React, {useEffect, useState} from 'react';
import MissionComponent from "../mission/MissionComponent"

const MissionsComponent = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setMissions(value));

    }, []);

    return (
        <div>
            {missions.filter(value => !value.launch_year.includes("2020"))
                .map(value =>
                    (<MissionComponent value={value} key={value.mission_name}/>))
            }
            }
        </div>
    );
};

export default MissionsComponent;