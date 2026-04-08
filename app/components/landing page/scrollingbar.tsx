"use client";

import React from "react";

const items = [
  { icon: "🩺", text: "Licensed Medical Providers" },
  { icon: "💻", text: "100% Online" },
  { icon: "💲", text: "Clear Pricing" },
  { icon: "📦", text: "Shipped to Your Door" },
];

export default function ScrollingBar() {
  return (
    <div className="scroll-container">
      <div className="scroll-track">
        {[...items, ...items].map((item, index) => (
          <div className="scroll-item" key={index}>
            <span className="icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}