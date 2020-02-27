import React, { useState } from 'react';
import './styles/App.css';
import teamMbrInfo from './components/teamMbrInfo';
import TeamMbrs from './components/TeamMbrs';
import Form from './Form';

function App() {
  // const [newMbr, setNewMbr] = useState('');
  // const addNewMbr = newTeamMbr => {
  //   setNewMbr([...newMbr, newTeamMbr]);
  // };

  return (
    <div className="container">
      <header>
        <h1>#AwesomeDevTeam</h1>
      </header>
      <div className="">
        <TeamMbrs 
          name={teamMbrInfo[0].name}
          role={teamMbrInfo[0].role}
          email={teamMbrInfo[0].email}
           />

        <TeamMbrs 
          name={teamMbrInfo[1].name}
          role={teamMbrInfo[1].role}
          email={teamMbrInfo[1].email}
          />

        <TeamMbrs 
          name={teamMbrInfo[2].name}
          role={teamMbrInfo[2].role}
          email={teamMbrInfo[2].email}
          />

        <TeamMbrs 
          name={teamMbrInfo[3].name}
          role={teamMbrInfo[3].role}
          email={teamMbrInfo[3].email}
          />
      </div>
      <Form />
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} #AwesomeDevTeam. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

