export default function Hero() {
  return (
    <section className="hero" id="home">
      <div
        className="hero-bg-circle"
        style={{ width: "600px", height: "600px", top: "-100px", left: "-200px" }}
      ></div>
      <div
        className="hero-bg-circle"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-100px",
          right: "-100px",
          opacity: 0.5,
        }}
      ></div>

      <div className="hero-left">
        <div className="hero-badge">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          Physician Supervised · FDA-Approved
        </div>

        <h1>
          Medical weight loss,<br />
          <em>done differently</em>
        </h1>

        <p className="hero-sub">
          Physician-supervised GLP-1 treatment programs with FDA-approved
          medications, personalized care, and lasting lifestyle support — all
          from home.
        </p>

        <div className="hero-actions">
          <a
            href="#"
            className="btn-primary"
            style={{ fontSize: "0.95rem", padding: "0.8rem 1.75rem" }}
          >
            Start Free Consultation
            <svg
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="#how-it-works"
            className="btn-outline"
            style={{ fontSize: "0.95rem", padding: "0.8rem 1.75rem" }}
          >
            See How It Works
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-num">5,000+</span>
            <span className="stat-label">Patients Helped</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">95%</span>
            <span className="stat-label">Success Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-num">10+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-visual">
          <div className="med-cards-stack">
            <div className="med-card">
              <div className="med-icon wegovy">💊</div>
              <div>
                <div className="med-name">Wegovy®</div>
                <div className="med-sub">
                  Semaglutide · Once-weekly injection
                </div>
              </div>
              <span className="med-badge">Weight Loss</span>
            </div>

            <div className="med-card">
              <div className="med-icon zepbound">🩺</div>
              <div>
                <div className="med-name">Zepbound®</div>
                <div className="med-sub">
                  Tirzepatide · Dual GLP-1/GIP action
                </div>
              </div>
              <span className="med-badge">Weight Loss</span>
            </div>

            <div className="med-card">
              <div className="med-icon ozempic">💉</div>
              <div>
                <div className="med-name">Ozempic®</div>
                <div className="med-sub">
                  Semaglutide · Diabetes care
                </div>
              </div>
              <span className="med-badge">Diabetes</span>
            </div>

            {/* Floating card */}
            <div
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1rem 1.25rem",
                boxShadow: "0 8px 32px rgba(197,132,59,0.12)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginTop: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,var(--amber),var(--terracotta))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>

              <div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-dark)",
                  }}
                >
                  Medical Supervision
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-light)",
                  }}
                >
                  100% physician-guided care
                </div>
              </div>

              <div
                style={{
                  marginLeft: "auto",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#10B981",
                  boxShadow: "0 0 0 3px rgba(16,185,129,0.2)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}