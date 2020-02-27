import React from 'react';
import '../styles/TeamMbrs.css';

const TeamMbrs = props => {
    return (
        <div className="cards-cont">
            {props.newMember.map(noob => (
                <div className="cards" key={noob.id}>
                    <h2>{noob.name}</h2>
                    <p>{noob.email}</p>
                    <p>{noob.role}</p>
                </div>
            ))}
        </div>
    );
}

export default TeamMbrs;

