"use client";

import { useState } from "react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="welcome-backdrop">
      <section
        aria-labelledby="welcome-title"
        aria-modal="true"
        className="welcome-card welcome-card-bg"
        role="dialog"
        style={{ backgroundImage: "url('/event.jpeg')" }}
      >
        <button
          autoFocus
          className="welcome-continue welcome-continue-small"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          Continue to menu
          <span aria-hidden="true">→</span>
        </button>
      </section>
    </div>
  );
}
