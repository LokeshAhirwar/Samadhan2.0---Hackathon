import React from 'react';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <h1>My Profile App</h1>
      <ProfileCard name="John Doe" jobTitle="Software Engineer" location="New York" />
    </div>
  );
}

export default App;