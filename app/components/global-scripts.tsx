"use client";
import { useEffect } from "react";

export default function GlobalScripts() {
  useEffect(() => {
    // ── Navbar scroll ──
    const navbar = document.getElementById("navbar");
    const navCTA = document.getElementById("navCTA");

    const handleScroll = () => {
      if (!navbar || !navCTA) return;

      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
        navCTA.style.display = "inline-flex";
      } else {
        navbar.classList.remove("scrolled");
        navCTA.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ── Hamburger ──
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger?.addEventListener("click", () => {
      navLinks?.classList.toggle("open");
    });

    // ── Scroll reveal ──
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((el) => observer.observe(el));

    // ── Cleanup (important) ──
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}