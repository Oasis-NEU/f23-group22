import React from "react";
import './HomePage.css'; // Ensure your CSS file is linked correctly

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="section intrduction-section">
        <h3>What's Student Business Hub?</h3>
        <p>Welcome to student Business Hub, the vibrant hub where ambition meets opportunity. Our platform is dedicated to empowering the entrepreneurial spirit within our university community. Here, we're not just building businesses – we're cultivating a network of innovators, dreamers, and doers.</p>
        {/* Add details */}
      </section>
      <section className="section about-section">
        <h3>About Us</h3>
        <p>Learn more about our mission and values.</p>
        {/* Add more about details */}
      </section>
      {/* Add more sections as needed */}
    </main>
  );
}
