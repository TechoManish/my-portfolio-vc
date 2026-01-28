export default function Videos() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Videos</h1>
      <p>Some of my YouTube work:</p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="YouTube video"
        allowFullScreen
      />
    </main>
  );
}
