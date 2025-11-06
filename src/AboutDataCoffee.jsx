import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import "./AboutDataCoffee.css";

function AboutDataCoffee() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="about-page fade-in">
      <div className="container">
        {/* Title - Outside the card */}
        <h1 className="gradient-title">Data Coffee</h1>
        <p className="tagline">
          Purpose-built platform for data-intensive and regulated industries
        </p>
        
        {/* Hero Section */}
        <section className="hero-main" data-section="hero">
          <h2 className="hero-subtitle">Privacy-First Data Governance & Transformation Platform</h2>
          <p className="lead">
            Data Coffee is a privacy-first data governance and transformation platform. 
            It enables organizations to securely manage, anonymize, and activate data for 
            analytics, collaboration, and AI training—without compromising privacy.
          </p>
          <p>
            Using advanced methods like tokenization, redaction, and synthetic data generation, 
            it ensures safe data use while meeting compliance standards like HIPAA, GDPR, and CCPA.
          </p>
          
          {/* Trust Badges */}
          <div className="trust-badges">
            <div className="badge">🔒 SOC 2 Compliant</div>
            <div className="badge">✓ HIPAA Ready</div>
            <div className="badge">✓ GDPR Aligned</div>
            <div className="badge">✓ Enterprise-Grade</div>
          </div>
        </section>

        <main>

          {/* Workflow Section */}
          <section data-section="workflow" className={visibleSections.has("workflow") ? "reveal-active" : "reveal"}>
            <h2>How It Works</h2>
            <p className="section-intro">
              Data Coffee ingests structured and unstructured inputs—like SQL, files, 
              videos—and transforms them through anonymization, classification, and 
              de-identification. It outputs clean, governed datasets ready for downstream use.
            </p>

            <div className="workflow">
              {[
                { num: 1, title: "Configure" },
                { num: 2, title: "Customize" },
                { num: 3, title: "Create" },
                { num: 4, title: "Schedule" },
              ].map((step) => (
                <div key={step.num} className="step">
                  <div className="step-number">{step.num}</div>
                  <h3>{step.title}</h3>
                </div>
              ))}
            </div>

            <p className="workflow-desc">
              The simple four-step workflow ensures quick, intuitive deployment.
            </p>
          </section>

          {/* Benefits Section */}
          <section data-section="benefits" className={visibleSections.has("benefits") ? "reveal-active" : "reveal"}>
            <h2>Key Benefits</h2>
            <div className="benefits-grid">
              {[
                {
                  title: "Centralized Data",
                  desc: "Centralizes fragmented data across your organization",
                },
                {
                  title: "Compliance",
                  desc: "Ensures compliance with HIPAA, GDPR, and CCPA regulations",
                },
                {
                  title: "Secure Collaboration",
                  desc: "Enables secure data sharing and collaboration",
                },
                {
                  title: "AI & Development",
                  desc: "Boosts AI and app development with safe, realistic synthetic data",
                },
                {
                  title: "Data Quality",
                  desc: "Improves data quality and consistency",
                },
                {
                  title: "Full Traceability",
                  desc: "Provides complete lineage and audit trails",
                },
              ].map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section data-section="usecases" className={visibleSections.has("usecases") ? "reveal-active" : "reveal"}>
            <h2>Real-World Use Cases</h2>
            {[
              {
                title: "Healthcare Providers",
                desc: "Anonymize patient records for AI insights without exposing PHI. Hospitals train AI models using synthetic patient records, avoiding real PHI.",
              },
              {
                title: "Financial Institutions",
                desc: "Use protected transaction data for internal audits and fraud analytics. Banks detect fraud with anonymized transaction streams.",
              },
              {
                title: "Software Teams & AI Labs",
                desc: "Use synthetic datasets instead of production data—keeping development secure and scalable.",
              },
            ].map((useCase, index) => (
              <div key={index} className="use-case">
                <h3>{useCase.title}</h3>
                <p>{useCase.desc}</p>
              </div>
            ))}
          </section>

          {/* Features Section */}
          <section data-section="features" className={visibleSections.has("features") ? "reveal-active" : "reveal"}>
            <h2>Core Features</h2>
            <div className="features-list">
              {[
                {
                  title: "Centralized Tokenization Engine",
                  desc: "Real-time masking of sensitive data with automated protection",
                },
                {
                  title: "Synthetic Data Generator",
                  desc: "Generate safe, realistic datasets for development and testing",
                },
                {
                  title: "Seamless Interoperability",
                  desc: "Works across EHRs, CRMs, APIs, and databases",
                },
                {
                  title: "Data Transformation",
                  desc: "Converts raw inputs into structured, queryable datasets",
                },
                {
                  title: "Complete Governance",
                  desc: "Access logging and data lineage for full traceability",
                },
              ].map((feature, index) => (
                <div key={index} className="feature">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture Section */}
          <section className="architecture">
            <h2>Architecture & Technology</h2>
            <p>
              Data Coffee is powered by our Octopus backend, integrated with GCP Cloud Run, 
              Databricks, and Vertex AI. It supports ingestion from SQL, Oracle, AWS, Google Cloud, 
              and more.
            </p>
            <p>
              The architecture enforces policy-driven governance and traceability across the full 
              data lifecycle—secure, scalable, and cloud-ready.
            </p>
          </section>

          {/* Summary Section */}
          <section className="summary">
            <h2>Privacy Without Compromise</h2>
            <p>
              Every transformation is secure, audited, and regulation-aligned. With structured 
              ingestion, automated masking, and audit logs, Data Coffee ensures privacy without 
              slowing innovation.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="copyright subtle-footer">
          © 2025 Data Coffee. Privacy-first data governance for regulated
          industries.
        </footer>
      </div>
    </div>
  );
}

export default AboutDataCoffee;
