import React, { useState } from 'react';
import './styles/App.css';
import TeamMbrs from './components/TeamMbrs';
import Form from './Form';

function App() {
  const [newMember, setNewMember] = useState([
    {
      id: 0,
      name: "Idong",
      role: "Software Developer",
      email: "idong@gmail.com",
    },
    {
      name: "Josephus",
      role: "iOS Developer",
      email:"joey@gmail.com",
  },
  {
      name: "Milly",
      role: "Project Manager",
      email: "millicent@gmail.com",
  },
  {
      name: "Beth",
      role: "UI/UX Developer",
      email: "beth@gmail.com",
  }
  ]);

    const addNewMember = newMbr => {
        const newbieMember = {
            id: Date.now(),
            name: newMbr.name,
            email: newMbr.email,
            role: newMbr.role
        };
        setNewMember([...newMember, newbieMember]);
    };

  return (
    <div className="container">
      <header>
        <h1>#AwesomeDevTeam</h1>
      </header>
      <div className="">
        <TeamMbrs newMember={newMember} />
      </div>
      <Form addNewMember={addNewMember} />
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} #AwesomeDevTeam. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

