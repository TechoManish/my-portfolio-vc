
<a href="/" style={backStyle}>← Back to Home</a>

const videos = [
  {
    title: "My First YouTube Video",
    description: "An introduction to my work and learning journey.",
    id: "YOUR_VIDEO_ID_1",
  },
  {
    title: "Project Demo",
    description: "Demo of a project I built using modern tools.",
    id: "YOUR_VIDEO_ID_2",
  },
  {
    title: "Tech Talk",
    description: "Sharing what I learned while building projects.",
    id: "YOUR_VIDEO_ID_3",
  },
];

export default function Videos() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>Videos</h1>
      <div style={styles.grid}>
        {videos.map((video) => (
          <div key={video.id} style={styles.card}>
            <iframe
              style={styles.iframe}
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allowFullScreen
            />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "30px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
  },
  iframe: {
    width: "100%",
    height: "200px",
    marginBottom: "10px",
  },
};
const backStyle = {
  display: "inline-block",
  marginBottom: "30px",
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "16px",
};
