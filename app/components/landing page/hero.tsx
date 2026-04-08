export default function Hero() {
  const cards = [
    {
      title: "Weight Loss",
      img: "assets/liraglutide.webp",
    },
    {
      title: "Peptides & Longevity",
            img: "assets/liraglutide.webp",

    },
    {
      title: "Men’s Health",
            img: "assets/liraglutide.webp",

    },
    {
      title: "Women’s Health",
            img: "assets/liraglutide.webp",

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
            <img src={card.img} alt={card.title} />
            <h3>
              {card.title} <span>→</span>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}