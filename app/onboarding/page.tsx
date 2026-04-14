"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./onboarding.css";

export default function OnboardingStep1() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const isValid = name && email && phone && gender;

  return (
    <div className="ob-page">

      {/* Left Panel */}
      <div className="ob-left">
        <div className="ob-brand">
          <div className="ob-brand-dot" />
          <span className="ob-brand-name">Ongo</span>
        </div>

        <div className="ob-left-content">
          <p className="ob-left-tag">Medical Weight Loss</p>
          <h2 className="ob-left-headline">
            Start your<br />
            <span>transformation</span><br />
            journey today
          </h2>
          <p className="ob-left-desc">
            Personalized GLP-1 weight loss programs designed by doctors, built for real results.
          </p>
          <div className="ob-testimonial">
            <p className="ob-testimonial-text">
              "I lost 18kg in 4 months. The process was easy and the doctors were incredibly supportive throughout."
            </p>
            <div className="ob-testimonial-author">
              <div className="ob-testimonial-avatar">SK</div>
              <div>
                <div className="ob-testimonial-name">Sarah K.</div>
                <div className="ob-testimonial-result">Lost 18kg in 4 months</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ob-left-footer">
          <div className="ob-stat-item">
            <span className="ob-stat-number">12k+</span>
            <span className="ob-stat-label">Patients helped</span>
          </div>
          <div className="ob-stat-item">
            <span className="ob-stat-number">94%</span>
            <span className="ob-stat-label">Success rate</span>
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
          <div className="ob-progress-bar active" />
          <div className="ob-progress-bar" />
          <div className="ob-progress-bar" />
        </div>

        <div className="ob-step-badge">
          <div className="ob-step-dot" />
          Step 1 of 3
        </div>

        <h1 className="ob-title">
          Tell us about <span className="ob-title-grad">yourself</span>
        </h1>
        <p className="ob-sub">
          We'll personalize your health transformation plan just for you.
        </p>

        <div className="ob-form">
          <div className="ob-field">
            <label className="ob-label">Full Name</label>
            <input
              className="ob-input"
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="ob-field">
            <label className="ob-label">Email Address</label>
            <input
              className="ob-input"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="ob-field">
            <label className="ob-label">Phone Number</label>
            <input
              className="ob-input"
              type="tel"
              placeholder="+1 234 567 8900"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="ob-field">
            <label className="ob-label">Gender</label>
            <div className="ob-gender-group">
              {["Male", "Female", "Other"].map((g) => (
                <button
                  key={g}
                  type="button"
                  className={`ob-gender-btn ${gender === g ? "selected" : ""}`}
                  onClick={() => setGender(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          className="ob-cta"
          onClick={() => router.push("/onboarding/body")}
          disabled={!isValid}
        >
          Continue
          <span className="ob-cta-arrow">→</span>
        </button>

        <p className="ob-fn">No account needed · 100% private</p>
      </div>
    </div>
  );
}
