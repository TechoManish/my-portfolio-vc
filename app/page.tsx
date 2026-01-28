export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Your Name</h1>
      <p>Welcome to my portfolio website.</p>

      <h2>My Work</h2>
      <ul>
        <li>Project 1 – Short description</li>
        <li>Project 2 – Short description</li>
      </ul>

      <h2>Videos</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="YouTube video"
        allowFullScreen
      />

      <h2>Contact</h2>
      <p>Email: your@email.com</p>
    </main>
  );
}
