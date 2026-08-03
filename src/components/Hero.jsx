import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>The Future of Marketing</h1>

        <p>
          Stay updated with the latest marketing news, insights, and industry
          trends.
        </p>

        <div className="search-box">
          <input type="text" placeholder="Search articles..." />

          <button>Search</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
          alt="Marketing team"
        />
      </div>
    </section>
  );
}

export default Hero;
