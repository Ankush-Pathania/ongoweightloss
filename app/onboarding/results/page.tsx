"use client";

import { useRouter } from "next/navigation";
import "../onboarding.css";

const STATS = [
  { val: "−12kg", key: "Est. weight loss" },
  { val: "+40%", key: "Skin glow" },
  { val: "8 wks", key: "Timeline" },
];

export default function OnboardingResults() {
  const router = useRouter();

  return (
    <div className="ob-page">

      {/* Left Panel */}
      <div className="ob-left">
        <div className="ob-brand">
          <div className="ob-brand-dot" />
          <span className="ob-brand-name">Ongo</span>
        </div>

        <div className="ob-left-content">
          <p className="ob-left-tag">Your Preview is Ready</p>
          <h2 className="ob-left-headline">
            This could<br />
            be <span>you</span> in<br />
            8 weeks
          </h2>
          <p className="ob-left-desc">
            Your personalized GLP-1 plan is ready. Thousands of people have already transformed their lives with Ongo.
          </p>
          <div className="ob-testimonial">
            <p className="ob-testimonial-text">
              "Looking at my before and after still gives me chills. I never thought I'd feel this good in my own body."
            </p>
            <div className="ob-testimonial-author">
              <div className="ob-testimonial-avatar">JP</div>
              <div>
                <div className="ob-testimonial-name">James P.</div>
                <div className="ob-testimonial-result">Lost 16kg in 9 weeks</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ob-left-footer">
          <div className="ob-stat-item">
            <span className="ob-stat-number">12k+</span>
            <span className="ob-stat-label">Transformations</span>
          </div>
          <div className="ob-stat-item">
            <span className="ob-stat-number">4.9★</span>
            <span className="ob-stat-label">Patient rating</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="ob-right">

        <div className="ob-progress">
          <div className="ob-progress-bar done" />
          <div className="ob-progress-bar done" />
          <div className="ob-progress-bar done" />
        </div>

        <div className="ob-step-badge">
          <div className="ob-step-dot" />
          Your Results
        </div>

        <h1 className="ob-title">
          Your <span className="ob-title-grad">transformation</span>
        </h1>
        <p className="ob-sub">
          This could be you in 8–12 weeks with a personalized plan.
        </p>

        <div className="ob-compare">
          <div className="ob-compare-top">

            <div className="ob-fig">
              <svg width="52" height="88" viewBox="0 0 52 88" fill="none">
                <ellipse cx="26" cy="12" rx="10" ry="10" fill="#F5CBA7" stroke="#EDD9C0" strokeWidth="1.2" />
                <path d="M12 30c0-7.7 6.3-14 14-14s14 6.3 14 14v18H12V30z" fill="#F5CBA7" stroke="#EDD9C0" strokeWidth="1.2" />
                <rect x="6" y="30" width="10" height="28" rx="5" fill="#F5CBA7" stroke="#EDD9C0" strokeWidth="1.2" />
                <rect x="36" y="30" width="10" height="28" rx="5" fill="#F5CBA7" stroke="#EDD9C0" strokeWidth="1.2" />
                <rect x="13" y="48" width="11" height="34" rx="5.5" fill="#F5CBA7" stroke="#EDD9C0" strokeWidth="1.2" />
                <rect x="28" y="48" width="11" height="34" rx="5.5" fill="#F5CBA7" stroke="#EDD9C0" strokeWidth="1.2" />
              </svg>
              <span className="ob-fig-lbl">Before</span>
            </div>

            <div className="ob-arrow-circle">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="ob-fig">
              <svg width="52" height="88" viewBox="0 0 52 88" fill="none">
                <defs>
                  <linearGradient id="af1" x1="17" y1="3" x2="35" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#C2622B" />
                  </linearGradient>
                  <linearGradient id="af2" x1="14" y1="18" x2="38" y2="82" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FAC775" /><stop offset="1" stopColor="#C2622B" />
                  </linearGradient>
                </defs>
                <ellipse cx="26" cy="12" rx="9" ry="9" fill="url(#af1)" stroke="#EDD9C0" strokeWidth="1" />
                <path d="M14 30c0-6.6 5.4-12 12-12s12 5.4 12 12v16H14V30z" fill="url(#af2)" stroke="#EDD9C0" strokeWidth="1" />
                <rect x="7" y="30" width="9" height="26" rx="4.5" fill="url(#af2)" stroke="#EDD9C0" strokeWidth="1" />
                <rect x="36" y="30" width="9" height="26" rx="4.5" fill="url(#af2)" stroke="#EDD9C0" strokeWidth="1" />
                <rect x="14" y="46" width="10" height="36" rx="5" fill="url(#af2)" stroke="#EDD9C0" strokeWidth="1" />
                <rect x="28" y="46" width="10" height="36" rx="5" fill="url(#af2)" stroke="#EDD9C0" strokeWidth="1" />
              </svg>
              <span className="ob-fig-lbl after">After</span>
            </div>

          </div>

          <div className="ob-stats">
            {STATS.map((s) => (
              <div key={s.key} className="ob-stat">
                <div className="ob-stat-val">{s.val}</div>
                <div className="ob-stat-key">{s.key}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="ob-cta" onClick={() => router.push("/")}>
          Get My Plan
          <span className="ob-cta-arrow">→</span>
        </button>

        <p className="ob-fn">Personalized just for you · No commitment</p>
      </div>
    </div>
  );
}
