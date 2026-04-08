import React from "react";
import styles from "./GlpLanding.module.css";
 
export default function GlpLanding() {
  return (
    <main className={styles.page}>
      {/* ── Hero Section ─────────────────────────────── */}
      <section className={styles.hero}>
        {/* Left column */}
        <div className={styles.heroLeft}>
          <div className={styles.productImageWrapper}>
            <img
              src="/images/glp-products.png"
              alt="GLP-1 prescription medication bundle"
              className={styles.productImage}
            />
          </div>
 
          <div className={styles.featureList}>
            <h3 className={styles.featureListHeading}>
              Everything you need—included:
            </h3>
            <ul className={styles.checkList}>
              {[
                "Prescription to fast, effective GLP-1",
                "1:1 physician guidance",
                "24/7 support",
                "Weight loss guarantee",
                "Fast & discreet shipping",
              ].map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkIcon} aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
 
        {/* Right column */}
        <div className={styles.heroRight}>
          <p className={styles.eyebrow}>Doctor-guided GLP-1 care</p>
          <h1 className={styles.heroHeading}>
            Weight loss{" "}
            <span className={styles.heroAccent}>made easy</span>
            <br />
            with personalized care
          </h1>
 
          <div className={styles.heroImages}>
            <div className={styles.heroImgCard}>
              <img
                src="/images/woman-smiling.jpg"
                alt="Happy patient after GLP-1 treatment"
                className={styles.heroImg}
              />
            </div>
            <div className={styles.heroImgCard}>
              <img
                src="/images/injection.jpg"
                alt="GLP-1 injection being administered"
                className={styles.heroImg}
              />
            </div>
          </div>
 
          <div className={styles.cta}>
            <h2 className={styles.ctaHeading}>
              A smarter approach to weight loss, built around you
            </h2>
            <p className={styles.ctaBody}>
              Find the right GLP-1 medication with the confidence that comes
              from knowing it is doctor-approved and budget-friendly.
            </p>
            <a href="#get-started" className={styles.ctaButton}>
              Get Started
            </a>
          </div>
        </div>
      </section>
 
      {/* ── Bottom Feature Strip ──────────────────────── */}
      <section className={styles.featureStrip}>
        <article className={styles.featureCard}>
          <div className={styles.featureCardMedia}>
            <img
              src="/images/app-screenshot.png"
              alt="Patient portal mobile app screenshot"
              className={styles.featureCardImg}
            />
          </div>
          <div className={styles.featureCardBody}>
            <h3 className={styles.featureCardHeading}>
              Everything,{" "}
              <span className={styles.featureCardAccent}>all in one place</span>
            </h3>
            <p className={styles.featureCardText}>
              Track your progress, check in with your provider, and manage your
              care in your all-in-one patient portal.
            </p>
          </div>
        </article>
 
        <article className={styles.featureCard}>
          <div className={styles.featureCardMedia}>
            <img
              src="/images/support.jpg"
              alt="Medical support team available 24/7"
              className={styles.featureCardImg}
            />
          </div>
          <div className={styles.featureCardBody}>
            <h3 className={styles.featureCardHeading}>
              Unlimited{" "}
              <span className={styles.featureCardAccent}>24/7 support</span>
            </h3>
            <p className={styles.featureCardText}>
              Medical support continues throughout your care, whenever you need
              it.
            </p>
          </div>
        </article>
      </section>
 
      {/* ── Legal Disclaimer ─────────────────────────── */}
      <footer className={styles.disclaimer}>
        <p>
          Prescriptions are issued only after an online consultation with an
          independent licensed provider. Compound medications are dispensed by
          state-licensed pharmacies but are not FDA approved.
        </p>
      </footer>
    </main>
  );
}