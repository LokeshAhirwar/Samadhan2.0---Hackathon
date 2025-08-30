// src/components/ProfileCard.jsx
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div style={{ backgroundColor: "#f2f2f2", minHeight: "100vh", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>My Profile Card</h1>
      <ProfileCard
        name="Muskan Bagde"
        role="Full Stack Developer"
        image="https://via.placeholder.com/150"
        bio="Passionate about coding, networking & freelancing projects 🚀"
      />
    </div>
  );
}

export default App;
