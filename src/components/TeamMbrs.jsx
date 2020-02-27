import React from 'react';

function TeamMbrs(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <p>{props.email}</p>
        </div>
    );
}

export default TeamMbrs;

