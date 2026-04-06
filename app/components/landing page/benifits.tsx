export default function WhyChooseUs() {
  return (
    <section style={{ background: "var(--amber-50)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            Why Choose Us
          </div>
          <h2 className="section-title">A program built around you</h2>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "1.5rem",
          }}
        >

          {/* Card 1 */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "24px", padding: "2rem" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--amber-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <svg width="22" height="22" fill="none" stroke="var(--amber)" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.6rem" }}>
              Medical Consultation
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
              Speak to licensed professionals who review your health history and determine whether GLP-1 medications are appropriate.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "24px", padding: "2rem" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--amber-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <svg width="22" height="22" fill="none" stroke="var(--amber)" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.6rem" }}>
              Personalized Treatment
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
              Access FDA-approved medications like Wegovy® or Zepbound® with individualized dosing and continuous safety monitoring.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "24px", padding: "2rem" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--amber-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <svg width="22" height="22" fill="none" stroke="var(--amber)" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.6rem" }}>
              Lifestyle Support
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
              Individual coaching covers nutrition, simple workout plans, and building long-term health habits that outlast your treatment.
            </p>
          </div>

          {/* Card 4 */}
          <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: "24px", padding: "2rem" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: "var(--amber-pale)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
              <svg width="22" height="22" fill="none" stroke="var(--amber)" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.3rem", fontWeight: 600, color: "var(--text-dark)", marginBottom: "0.6rem" }}>
              Progress Tracking
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
              Regular check-ins with your provider ensure treatment is working. We adjust your plan as needed to keep you on track.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}