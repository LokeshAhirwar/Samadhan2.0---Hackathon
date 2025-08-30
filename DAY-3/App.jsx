export default function ProfileCard({ name, role, image, bio }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p><strong>{role}</strong></p>
      <p>{bio}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "300px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    borderRadius: "12px",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginBottom: "10px",
  },
};
