"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import "../onboarding.css";

const LOADER_LABELS = [
  "Analyzing body shape…",
  "Mapping facial features…",
  "Calculating glow score…",
  "Finalizing your preview…",
  "Almost done…",
];

export default function OnboardingProcessing() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [loaderLabel, setLoaderLabel] = useState(LOADER_LABELS[0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let p = 0;
    let li = 0;
    intervalRef.current = setInterval(() => {
      p += Math.random() * 2.5 + 0.8;
      if (p >= 100) {
        clearInterval(intervalRef.current!);
        setProgress(100);
        setLoaderLabel("Ready!");
      } else {
        setProgress(p);
        const ni = Math.min(Math.floor(p / 20), LOADER_LABELS.length - 1);
        if (ni > li) { li = ni; setLoaderLabel(LOADER_LABELS[li]); }
      }
    }, 55);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <div className="ob-page">

      {/* Left Panel */}
      <div className="ob-left">
        <div className="ob-brand">
          <div className="ob-brand-dot" />
          <span className="ob-brand-name">Ongo</span>
        </div>

        <div className="ob-left-content">
          <p className="ob-left-tag">AI Analysis</p>
          <h2 className="ob-left-headline">
            Our AI is<br />
            <span>working</span><br />
            for you
          </h2>
          <p className="ob-left-desc">
            Advanced body composition analysis and personalized health scoring — powered by medical-grade AI.
          </p>
          <div className="ob-testimonial">
            <p className="ob-testimonial-text">
              "The results were so accurate. It felt like the AI actually understood my body type and what I needed."
            </p>
            <div className="ob-testimonial-author">
              <div className="ob-testimonial-avatar">AL</div>
              <div>
                <div className="ob-testimonial-name">Aisha L.</div>
                <div className="ob-testimonial-result">Lost 11kg in 8 weeks</div>
              </div>
            </div>
          </div>
        </div>

        <div className="ob-left-footer">
          <div className="ob-stat-item">
            <span className="ob-stat-number">30s</span>
            <span className="ob-stat-label">Analysis time</span>
          </div>
          <div className="ob-stat-item">
            <span className="ob-stat-number">99%</span>
            <span className="ob-stat-label">Accuracy rate</span>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="ob-right">

        <div className="ob-progress">
          <div className="ob-progress-bar done" />
          <div className="ob-progress-bar done" />
          <div className="ob-progress-bar active" />
        </div>

        <div className="ob-step-badge">
          <div className="ob-step-dot" />
          Processing
        </div>

        <h1 className="ob-title">
          Generating your <span className="ob-title-grad">results…</span>
        </h1>
        <p className="ob-sub">
          Our AI is analyzing your photo and crafting your personalized transformation preview.
        </p>

        {/* Spinning icon */}
        <div style={{ display: "flex", justifyContent: "center", margin: "1.5rem 0" }}>
          <div style={{
            width: 80,
            height: 80,
            borderRadius: 24,
            background: "linear-gradient(135deg, #FEF3C7, #FDE8C8)",
            border: "1.5px solid #EDD9C0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg
              width="48" height="48" viewBox="0 0 64 64" fill="none"
              style={{ animation: progress < 100 ? "spin 1.2s linear infinite" : "none" }}
            >
              <circle cx="32" cy="32" r="18" stroke="#EDD9C0" strokeWidth="3" />
              <path d="M32 14a18 18 0 0118 18" stroke="url(#proc)" strokeWidth="3" strokeLinecap="round" />
              <defs>
                <linearGradient id="proc" x1="32" y1="14" x2="50" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F59E0B" /><stop offset="1" stopColor="#C2622B" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="ob-loader">
          <div className="ob-track">
            <div className="ob-fill" style={{ width: `${Math.round(progress)}%` }} />
          </div>
          <div className="ob-loader-row">
            <span className="ob-loader-lbl">{loaderLabel}</span>
            <span className="ob-loader-pct">{Math.round(progress)}%</span>
          </div>
        </div>

        <button
          className="ob-cta"
          onClick={() => router.push("/onboarding/results")}
          disabled={progress < 100}
        >
          {progress < 100 ? "Please wait…" : "See My Results"}
          <span className="ob-cta-arrow">→</span>
        </button>

      </div>
    </div>
  );
}
