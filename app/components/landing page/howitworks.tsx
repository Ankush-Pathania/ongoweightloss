export default function Steps() {
  return (
    <section className="steps-section" id="how-it-works">
      <div className="steps-inner">
        
        <div className="steps-header reveal">
          <div>
            <div className="section-label">The Process</div>
            <h2 className="section-title">
              Your journey to<br />healthier weight,<br />simplified
            </h2>
          </div>

          <p className="section-sub">
            We've made medical weight loss accessible. Three clear steps connect you with a licensed physician who creates a treatment plan built specifically for you.
          </p>
        </div>

        <div className="steps-grid reveal">
          
          <div className="step-item">
            <div className="step-num">01</div>
            <div className="step-icon-wrap">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <div className="step-title">Book a Free Visit</div>
            <p className="step-desc">
              Schedule a no-cost consultation with our care team to discuss your health goals, medical history, and medication preferences — completely confidential.
            </p>
          </div>

          <div className="step-item">
            <div className="step-num">02</div>
            <div className="step-icon-wrap">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M20 21a8 8 0 10-16 0" />
              </svg>
            </div>
            <div className="step-title">Meet Your Doctor</div>
            <p className="step-desc">
              Connect with a licensed physician via video or audio for a personalized clinical evaluation covering BMI, medical conditions, and individual health goals.
            </p>
          </div>

          <div className="step-item">
            <div className="step-num">03</div>
            <div className="step-icon-wrap">
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4" />
                <path d="M21 12c.552 0 1-.448 1-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1v6c0 .552.448 1 1 1m18 0c0 5.523-4.477 10-10 10S2 17.523 2 12" />
              </svg>
            </div>
            <div className="step-title">Start Treatment</div>
            <p className="step-desc">
              Receive your prescription and choose where to fill it — any licensed pharmacy, or we'll coordinate home delivery, with ongoing monitoring and lifestyle support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}