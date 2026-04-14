"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import "../onboarding.css";

export default function OnboardingBody() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [age, setAge] = useState(25);
  const [height, setHeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [goalWeight, setGoalWeight] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  const isValid = height && currentWeight && goalWeight && photo;

  return (
    <div className="ob-page">

      {/* Left Panel */}
      <div className="ob-left">
        <div className="ob-brand">
          <div className="ob-brand-dot" />
          <span className="ob-brand-name">Ongo</span>
        </div>

        <div className="ob-left-content">
          <p className="ob-left-tag">Your Body Profile</p>
          <h2 className="ob-left-headline">
            Precision<br />
            <span>science</span><br />
            meets care
          </h2>
          <p className="ob-left-desc">
            Our doctors use your stats to create a medically-tailored GLP-1 plan that fits your exact body and goals.
          </p>
          <div className="ob-testimonial">
            <p className="ob-testimonial-text">
              "The doctors actually looked at my numbers and customized everything. It felt nothing like a generic program."
            </p>
            <div className="ob-testimonial-author">
              <div className="ob-testimonial-avatar">MR</div>
              <div>
                <div className="ob-testimonial-name">Michael R.</div>
                <div className="ob-testimonial-result">Lost 14kg in 10 weeks</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ob-left-footer">
          <div className="ob-stat-item">
            <span className="ob-stat-number">−12kg</span>
            <span className="ob-stat-label">Avg. weight loss</span>
          </div>
          <div className="ob-stat-item">
            <span className="ob-stat-number">8wks</span>
            <span className="ob-stat-label">Average timeline</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="ob-right">

        <div className="ob-progress">
          <div className="ob-progress-bar done" />
          <div className="ob-progress-bar active" />
          <div className="ob-progress-bar" />
        </div>

        <div className="ob-step-badge">
          <div className="ob-step-dot" />
          Step 2 of 3
        </div>

        <h1 className="ob-title">
          Your <span className="ob-title-grad">body stats</span>
        </h1>
        <p className="ob-sub">
          This helps us calculate your personalized transformation preview.
        </p>

        <div className="ob-form">

          <div className="ob-field">
            <div className="ob-slider-row">
              <label className="ob-label">Age</label>
              <span className="ob-slider-val">{age} yrs</span>
            </div>
            <input
              className="ob-slider"
              type="range"
              min={16}
              max={80}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
            <div className="ob-slider-range">
              <span>16</span>
              <span>80</span>
            </div>
          </div>

          <div className="ob-row">
            <div className="ob-field">
              <label className="ob-label">Height (cm)</label>
              <input
                className="ob-input"
                type="number"
                placeholder="170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="ob-field">
              <label className="ob-label">Current Weight (kg)</label>
              <input
                className="ob-input"
                type="number"
                placeholder="75"
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}
              />
            </div>
          </div>

          <div className="ob-field">
            <label className="ob-label">Goal Weight (kg)</label>
            <input
              className="ob-input"
              type="number"
              placeholder="63"
              value={goalWeight}
              onChange={(e) => setGoalWeight(e.target.value)}
            />
          </div>

          <div className="ob-field">
            <label className="ob-label">
              Your Photo <span style={{ color: "#D97706" }}>*</span>
            </label>
            <div
              className={`ob-upload ${photo ? "has-photo" : ""}`}
              onClick={() => fileRef.current?.click()}
            >
              {photo ? (
                <img src={photo} alt="Your photo" className="ob-upload-preview" />
              ) : (
                <>
                  <div className="ob-upload-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 13V4M6 7l4-4 4 4" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M3 15v1a2 2 0 002 2h10a2 2 0 002-2v-1" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="ob-upload-text"><strong>Tap to upload</strong> or drag &amp; drop</p>
                  <p className="ob-upload-hint">JPG, PNG — max 10MB · Front-facing for best results</p>
                </>
              )}
            </div>
            <input ref={fileRef} type="file" accept="image/*" hidden onChange={handlePhoto} />
            {photo && (
              <button className="ob-remove-btn" onClick={() => setPhoto(null)}>
                Remove photo
              </button>
            )}
          </div>

        </div>

        <button
          className="ob-cta"
          onClick={() => router.push("/onboarding/processing")}
          disabled={!isValid}
        >
          Generate My Preview
          <span className="ob-cta-arrow">→</span>
        </button>

        <p className="ob-fn">Photo processed securely · Never stored</p>
      </div>
    </div>
  );
}
