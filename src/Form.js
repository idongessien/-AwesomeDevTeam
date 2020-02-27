import React, { useState } from 'react';
import './styles/Form.css';

const Form = props => {

    const [noob, setNoob] = useState({
        name: "",
        email: "",
        role: ""
    });

    const handleInput = e => {
        setNoob({ ...noob, [e.target.name]: e.target.value });
        console.log(noob);
      };

    const submit = e => {
        e.preventDefault();
        props.addNewMember(noob);
        setNoob({ name: "", email: "", role: ""});
    };

    return (
        <div className="form-sec">
            <h3>Add a New Team Member</h3>
            <form onSubmit={submit}>
                <input name="name"  type="text" placeholder="First name..." onChange={handleInput} value={noob.name} />

                <input type="email" placeholder="Email..." name="email" onChange={handleInput} value={noob.email} />
                
                <input type="text" placeholder="Role..." onChange={handleInput} name="role" value={noob.role} />
                
                <button type="submit">Add Member</button>
            </form>
        </div>
    );
}

export default Form;