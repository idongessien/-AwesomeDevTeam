import React from 'react';

const TeamMbrs = props => {
    return (
        <div>
            {props.newMember.map(noob => (
                <div key={noob.id}>
                    <h2>{noob.name}</h2>
                    <p>{noob.email}</p>
                    <p>{noob.role}</p>
                </div>
            ))}
        </div>
    );
}

export default TeamMbrs;

