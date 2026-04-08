"use client";
import { useState } from "react";

export default function MedicationsSection() {
  const [activeTab, setActiveTab] = useState("all");

 const handleTabClick = (tab: string) => {
  setActiveTab(tab);
};

const getVisibility = (category: string) => {
  if (activeTab === "all") return "visible";
  return category === activeTab ? "visible" : "";
};

  return (
    <section className="meds-section" id="medications">
      <div className="meds-inner">
        <div className="meds-header reveal">
          <div className="section-label" style={{ justifyContent: "center" }}>
            Treatments
          </div>
          <h2
            className="section-title"
            style={{ marginBottom: "0.75rem" }}
          >
            FDA-Approved GLP-1 Medications
          </h2>
          <p
            className="section-sub"
            style={{
              margin: "0 auto 1.5rem",
              textAlign: "center",
            }}
          >
            Prescribed by licensed physicians when clinically appropriate for
            your health needs.
          </p>
        </div>

        {/* Tabs */}
        <div className="tab-bar reveal">
           <button
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => handleTabClick("all")}
          >
            All Medications
          </button>
          <button
            className={`tab-btn ${activeTab === "weight" ? "active" : ""}`}
            onClick={() => handleTabClick("weight")}
          >
            Weight Loss
          </button>
          <button
            className={`tab-btn ${activeTab === "diabetes" ? "active" : ""}`}
            onClick={() => handleTabClick("diabetes")}
          >
            Diabetes Care
          </button>
         
        </div>

        {/* Cards */}
        <div className="meds-grid" id="medsGrid">
          {/* WEGOVY */}
          <div
            className={`med-full-card ${getVisibility("weight")}`}
            data-category="weight"
          >
            <div className="med-card-top">
              <div>
                <div className="med-card-name">Wegovy®</div>
                <div className="med-card-generic">Semaglutide</div>
              </div>
              <span className="med-approved-badge">FDA Approved</span>
            </div>
            <div className="med-card-body">
              <span className="med-card-tag">
                Weight Management · Once-weekly
              </span>
              <p className="med-card-desc">
                An FDA-approved GLP-1 medication for chronic weight management,
                similar to Ozempic®. For adults with BMI 30+, or BMI 27–29.9
                with related health conditions.
              </p>
              <ul className="med-features">
                <li>Once-weekly injection — fits your routine</li>
                <li>Clinically studied for sustainable weight loss</li>
                <li>Reduces appetite and food cravings</li>
                <li>Provider-guided lifestyle program included</li>
              </ul>
            </div>
            <div className="med-card-footer">
              <a
                href="#"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start Consultation
              </a>
            </div>
          </div>

          {/* ZEPBOUND */}
          <div
            className={`med-full-card ${getVisibility("weight")}`}
            data-category="weight"
          >
            <div className="med-card-top">
              <div>
                <div className="med-card-name">Zepbound®</div>
                <div className="med-card-generic">Tirzepatide</div>
              </div>
              <span className="med-approved-badge">FDA Approved</span>
            </div>
            <div className="med-card-body">
              <span className="med-card-tag">
                Weight Management · Dual-action
              </span>
              <p className="med-card-desc">
                Tirzepatide's dual GLP-1/GIP mechanism makes it among the most
                clinically effective FDA-approved options for chronic weight
                management.
              </p>
              <ul className="med-features">
                <li>Once-weekly injection</li>
                <li>Dual mechanism: GLP-1 + GIP action</li>
                <li>Clinically studied for weight management</li>
                <li>Online care with licensed medical supervision</li>
              </ul>
            </div>
            <div className="med-card-footer">
              <a
                href="#"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start Consultation
              </a>
            </div>
          </div>

          {/* OZEMPIC */}
          <div
            className={`med-full-card ${getVisibility("diabetes")}`}
            data-category="diabetes"
          >
            <div className="med-card-top">
              <div>
                <div className="med-card-name">Ozempic®</div>
                <div className="med-card-generic">Semaglutide</div>
              </div>
              <span className="med-approved-badge">FDA Approved</span>
            </div>
            <div className="med-card-body">
              <span className="med-card-tag">
                Diabetes Care · Once-weekly
              </span>
              <p className="med-card-desc">
                FDA-approved for adults with type 2 diabetes, used alongside a
                healthy diet and physical activity to help improve blood sugar
                control.
              </p>
              <ul className="med-features">
                <li>Convenient once-a-week injection</li>
                <li>Clinically studied to help lower A1C levels</li>
                <li>Shown to support cardiometabolic health</li>
                <li>Part of a comprehensive diabetes care plan</li>
              </ul>
            </div>
            <div className="med-card-footer">
              <a
                href="#"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start Consultation
              </a>
            </div>
          </div>

          {/* MOUNJARO */}
          <div
            className={`med-full-card ${getVisibility("diabetes")}`}
            data-category="diabetes"
          >
            <div className="med-card-top">
              <div>
                <div className="med-card-name">Mounjaro®</div>
                <div className="med-card-generic">Tirzepatide</div>
              </div>
              <span className="med-approved-badge">FDA Approved</span>
            </div>
            <div className="med-card-body">
              <span className="med-card-tag">
                Diabetes Care · Once-weekly
              </span>
              <p className="med-card-desc">
                FDA-approved for adults with type 2 diabetes, combining a
                healthy diet and physical activity to support comprehensive
                diabetes management.
              </p>
              <ul className="med-features">
                <li>Convenient once-weekly injection</li>
                <li>Clinically studied to help lower A1C levels</li>
                <li>Supports cardiometabolic health</li>
                <li>Comprehensive diabetes care plan</li>
              </ul>
            </div>
            <div className="med-card-footer">
              <a
                href="#"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start Consultation
              </a>
            </div>
          </div>

          {/* RYBELSUS */}
          <div
            className={`med-full-card ${getVisibility("diabetes")}`}
            data-category="diabetes"
          >
            <div className="med-card-top">
              <div>
                <div className="med-card-name">Rybelsus®</div>
                <div className="med-card-generic">
                  Semaglutide (oral)
                </div>
              </div>
              <span className="med-approved-badge">FDA Approved</span>
            </div>
            <div className="med-card-body">
              <span className="med-card-tag">
                Diabetes Care · Daily oral tablet
              </span>
              <p className="med-card-desc">
                The only oral semaglutide approved for type 2 diabetes. Taken
                once daily, it provides an injection-free path to improved
                blood sugar control.
              </p>
              <ul className="med-features">
                <li>Taken once daily as an oral tablet</li>
                <li>No injection required</li>
                <li>Clinically studied to help lower A1C levels</li>
                <li>Supports cardiometabolic health</li>
              </ul>
            </div>
            <div className="med-card-footer">
              <a
                href="#"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start Consultation
              </a>
            </div>
          </div>

          {/* LIRAGLUTIDE */}
          <div
            className={`med-full-card ${getVisibility("diabetes")}`}
            data-category="diabetes"
          >
            <div className="med-card-top">
              <div>
                <div className="med-card-name">Liraglutide</div>
                <div className="med-card-generic">
                  Victoza® / Saxenda®
                </div>
              </div>
              <span className="med-approved-badge">FDA Approved</span>
            </div>
            <div className="med-card-body">
              <span className="med-card-tag">
                Diabetes Care & Weight Management
              </span>
              <p className="med-card-desc">
                FDA-approved for both type 2 diabetes (Victoza®) and chronic
                weight management (Saxenda®) alongside diet and lifestyle
                changes.
              </p>
              <ul className="med-features">
                <li>Once-daily injection</li>
                <li>GLP-1 mechanism of action</li>
                <li>Dual-use: diabetes and weight management</li>
                <li>Online care with licensed supervision</li>
              </ul>
            </div>
            <div className="med-card-footer">
              <a
                href="#"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Start Consultation
              </a>
            </div>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.78rem",
            color: "var(--text-light)",
            marginTop: "2rem",
            maxWidth: "640px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.65",
          }}
        >
          All medications require a prescription by a licensed provider based
          on medical necessity. GLP-1 medications are only given to patients
          when it falls within FDA approval guidelines.
        </p>
      </div>
    </section>
  );
}