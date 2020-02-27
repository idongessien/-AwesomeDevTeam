import React, { useState } from 'react';
import './App.css';

function App() {
  const [newMbr, setNewMbr] = useState('');
  return (
    <div className="body">
      <header>
        <h1>#AwesomeDevTeam</h1>
      </header>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()} #AwesomeDevTeam. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
