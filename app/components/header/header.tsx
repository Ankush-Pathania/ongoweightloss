"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar" className="navbar">
      <div className="nav-inner">
        
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-dot"></span>
          Ongo
        </Link>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#medications">Medications</a></li>
          <li><a href="#bmi-calculator">BMI Check</a></li>
          <li><a href="#doctors">Our Doctors</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        {/* Right Side */}
        <div className="nav-right">
          <a href="#" className="btn-primary nav-cta">
            Start Free Consult
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}