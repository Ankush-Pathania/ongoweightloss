export default function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        
        <div className="faq-header reveal">
          <div className="section-label" style={{ justifyContent: "center" }}>
            Common Questions
          </div>

          <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
            Frequently Asked Questions
          </h2>

          <p
            className="section-sub"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Everything you need to know about GLP-1 medications and our treatment programs.
          </p>
        </div>

        <div id="faqList" className="reveal">

          {/* 1 */}
          <div className="faq-item">
            <button className="faq-question">
              What are GLP-1 medications and how do they help with weight loss?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                GLP-1 medications are prescription drugs that help control blood sugar and reduce appetite. They work by mimicking a natural hormone that signals fullness, making it easier to eat less and lose weight over time. They've been clinically studied in large trials and shown to produce meaningful, sustainable results when combined with lifestyle support.
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="faq-item">
            <button className="faq-question">
              Are GLP-1 drugs like Wegovy® or Zepbound® safe for long-term use?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                Both Wegovy® and Zepbound® have been evaluated in long-term clinical trials. Safety and appropriateness for continued use depend on your individual health profile. Your licensed physician at Ongo will continuously monitor your progress and can adjust or discontinue treatment as needed.
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="faq-item">
            <button className="faq-question">
              Who should consider taking GLP-1 medications for weight management?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                GLP-1 medications for weight management are generally approved for adults with a BMI of 30+, or a BMI of 27–29.9 with at least one weight-related health condition such as high blood pressure, type 2 diabetes, or high cholesterol. A licensed provider will evaluate your full medical history before any prescription is issued.
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="faq-item">
            <button className="faq-question">
              How does a GLP-1 injection work to reduce appetite and cravings?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                GLP-1 medications act on receptors in the brain and digestive system. They slow gastric emptying (so you feel full longer), reduce appetite signals, and modulate reward pathways involved in food cravings. Over time, many patients find it significantly easier to maintain healthier eating patterns.
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="faq-item">
            <button className="faq-question">
              Do GLP-1 medications require a prescription from a doctor?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                Yes — all GLP-1 medications are prescription-only and must be prescribed by a licensed healthcare provider based on medical necessity. At Ongo, a board-certified physician evaluates your health history and determines whether a prescription is clinically appropriate before any medication is issued.
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="faq-item">
            <button className="faq-question">
              What are the common side effects of GLP-1 medications?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                The most common side effects are gastrointestinal in nature, including nausea, vomiting, diarrhea, and constipation — particularly during the dose titration period. These often improve as your body adjusts. Your Ongo provider will guide you through the titration process and help manage any side effects you experience.
              </div>
            </div>
          </div>

          {/* 7 */}
          <div className="faq-item">
            <button className="faq-question">
              How soon can I expect to see results with GLP-1 treatment?
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                Results vary by individual. Some patients notice reduced appetite within the first few weeks, while meaningful weight changes typically emerge over 8–16 weeks as dosage is gradually increased. Clinical trials show continued results over 6–18 months of treatment, especially when combined with dietary changes and regular activity.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}