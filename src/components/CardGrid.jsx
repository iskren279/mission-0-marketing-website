import Card from "./Card";
import "../styles/CardGrid.css";

function CardGrid() {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",

      title: "Marketing Trends in 2026",

      description:
        "Discover the latest strategies shaping the marketing industry.",
    },

    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",

      title: "Building Strong Brands",

      description:
        "Learn how organisations create meaningful customer connections.",
    },

    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",

      title: "Digital Transformation",

      description: "Explore how technology is changing modern marketing.",
    },
  ];

  return (
    <section className="card-grid">
      {articles.map((article, index) => (
        <Card
          key={index}
          image={article.image}
          title={article.title}
          description={article.description}
        />
      ))}
    </section>
  );
}

export default CardGrid;
