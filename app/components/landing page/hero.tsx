export default function Hero() {
  const cards = [
  {
    title: "Weight Loss",
    defaultImg: "assets/fat-woman.webp",
    hoverImg: "assets/slim-girl.webp",
  },
  {
    title: "Peptides & Longevity",
    defaultImg: "assets/fat-woman.webp",
    hoverImg: "assets/slim-girl.webp",
  },
  {
    title: "Men’s Health",
    defaultImg: "assets/fat-woman.webp",
    hoverImg: "assets/slim-girl.webp",
  },
  {
    title: "Women’s Health",
    defaultImg: "assets/fat-woman.webp",
    hoverImg: "assets/slim-girl.webp",
  },
];
  return (
    <section className="hero" id="home">
      <div className="bg_big_text">
        <h6>
        OngoWeightLoss
        </h6>
      </div>
      <div className="hero-top">Join 500,000+ patients</div>

      <h1>
        Healthcare, <br />
        <span>redefined</span> for real life.
      </h1>

      <p>
        We provide medical care online—simple, direct, and led by licensed
        providers. No waiting rooms. No unnecessary steps. Just care that works.
      </p>

     <div className="card-wrapper">
  {cards.map((card, index) => (
    <div className="card" key={index}>
      
      <div className="card-image">
        <img
          src={card.defaultImg}
          alt={card.title}
          className="img-default"
        />
        <img
          src={card.hoverImg}
          alt={card.title}
          className="img-hover"
        />
      </div>

      <h3>
        {card.title} <span>→</span>
      </h3>
    </div>
  ))}
</div>
    </section>
  );
}