export default function Doctors() {
  return (
    <section className="doctors-section" id="doctors">
      <div className="doctors-inner">

        <div className="doctors-header reveal">
          <div className="section-label" style={{ justifyContent: "center" }}>
            Medical Team
          </div>

          <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
            Meet Our Physicians
          </h2>

          <p
            className="section-sub"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Licensed physicians with decades of combined clinical experience in weight management and metabolic health.
          </p>
        </div>

        <div className="doctors-grid reveal">

          <div className="doctor-card">
            <div className="doctor-avatar avatar-1">M</div>
            <div className="doctor-name">Dr. Miller</div>
            <div className="doctor-bio">
              Columbia University MD · Washington University postgraduate training. Specializes in physician-guided weight loss and metabolic health care.
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-avatar avatar-2">N</div>
            <div className="doctor-name">Dr. Niles</div>
            <div className="doctor-bio">
              30+ years of clinical experience. Provides physician-guided weight loss consultations with a focus on personalized, patient-centered care.
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-avatar avatar-3">K</div>
            <div className="doctor-name">Dr. Krasne</div>
            <div className="doctor-bio">
              Board-certified physician. Medical training at University of Florida and UM Miller School of Medicine. Residency completed 2017.
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-avatar avatar-4">B</div>
            <div className="doctor-name">Dr. Bugailiskis</div>
            <div className="doctor-bio">
              University of Illinois at Chicago MD. Works with patients to evaluate health history and goals to determine appropriate treatment options.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}