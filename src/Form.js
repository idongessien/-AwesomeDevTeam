import React, { useState } from 'react';
import './styles/Form.css';

export default function Form() {
    return (
        <div>
            <h3>Add New Team Member</h3>
            <form>
                <input type="text" placeholder="First name..."/>
                <input type="email" placeholder="Email..."/>
                <input type="text" placeholder="Role..."/>
                <input type="submit" />
            </form>
        </div>
    );
}