export default function Home() {
  return (
    <main style={styles.container}>
      <section style={styles.section}>
        <h1 style={styles.title}>Techo Manish</h1>
        <p style={styles.subtitle}>
          Developer | Learner | Building projects with Next.js
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>
        <ul style={styles.list}>
          <li>Portfolio Website (Next.js + Vercel)</li>
          <li>YouTube Content Projects</li>
          <li>More coming soon...</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Videos</h2>
        <p>Some of my YouTube work:</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube video"
          allowFullScreen
        />
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Contact</h2>
        <p>Email: your@email.com</p>
      </section>
    </main>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
  },
  section: {
    marginBottom: "60px",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    color: "#555",
  },
  heading: {
    fontSize: "26px",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
  },
};
