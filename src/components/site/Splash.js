import React from 'react';
import GamesList from './Games/GamesList';

const Splash = (props) => {
    return (
        <div>
            <GamesList token={props.sessionToken}/>
        </div>
    )
}
export default Splash;