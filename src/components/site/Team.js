import React from 'react';
import TeamList from './Team/TeamList';

const Splash = (props) => {
    return (
        <div>
            <TeamList token={props.sessionToken}/>
        </div>
    )
}
export default Splash;