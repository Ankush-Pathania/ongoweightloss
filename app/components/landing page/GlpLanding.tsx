import React from "react";

const checkItems = [
  "Prescription to fast, effective GLP-1",
  "1:1 physician guidance",
  "24/7 support",
  "Weight loss guarantee",
  "Fast & discreet shipping",
];

export default function WeightLossSection() {
  return (
    <section className="wl-section reveal">
      {/* ── Hero Block ── */}
      <div className="wl-hero">
         {/* Right column */}
        <div className="wl-hero-right reveal">
          <p className="wl-eyebrow reveal">Doctor-Guided GLP-1 Care</p>
          <h1 className="wl-headline reveal">
            Weight loss{" "}
            <span className="wl-headline-accent">made easy</span>
            <br />
            with personalized care
          </h1>

          <div className="wl-image-grid">
            <div className="wl-image-card reveal">
              <img
                src="assets/glp-b.png"
                alt="Happy patient after weight loss"
                className="wl-grid-image"
              />
            </div>
            <div className="wl-image-card reveal">
              <img
                src="assets/glp-a.png"
                alt="GLP-1 injection demonstration"
                className="wl-grid-image"
              />
            </div>
          </div>

          <div className="wl-cta reveal">
            <h2 className="wl-cta-heading">
              A smarter approach to weight loss, built around you
            </h2>
            <p className="wl-cta-body">
              Find the right GLP-1 medication with the confidence that comes
              from knowing it is doctor-approved and budget-friendly.
            </p>
            <a href="#get-started" className="wl-cta-button">
              Get Started
            </a>
          </div>
        </div>
        {/* Left column */}
        <div className="wl-hero-left reveal">
          <div className="wl-product-image-wrap reveal">
            <img
              src="assets/glp-c.png"
              alt="GLP-1 prescription medication"
              className="wl-product-image"
            />
          </div>

          <div className="wl-check-list reveal">
            <p className="wl-check-list-title">Everything you need—included:</p>
            <ul className="wl-check-items">
              {checkItems.map((item) => (
                <li key={item} className="wl-check-item reveal">
                  <span className="wl-check-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="9" fill="#2D7A4F" />
                      <path
                        d="M5 9.5l2.5 2.5L13 6"
                        stroke="#fff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

       
      </div>



      {/* ── Disclaimer ── */}
      <p className="wl-disclaimer">
        Prescriptions are issued only after an online consultation with an
        independent licensed provider. Compound medications are dispensed by
        state-licensed pharmacies but are not FDA approved.
      </p>
    </section>
  );
}
