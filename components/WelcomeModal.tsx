"use client";

import { useState } from "react";
import Image from "next/image";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="welcome-backdrop">
      <section
        aria-labelledby="welcome-title"
        aria-modal="true"
        className="welcome-card"
        role="dialog"
      >
        <Image
          alt="Cisco"
          className="welcome-logo"
          height={2160}
          priority
          src="/menu/Cisco-Logo.png"
          width={3840}
        />

        <div aria-hidden="true" className="welcome-divider">
          <span />
          <span className="welcome-diamond" />
          <span />
        </div>

       
        <h1 id="welcome-title" className="welcome-title">Welcome</h1>
        <p className="welcome-client">Rajmohan <span aria-hidden="true">&amp;</span> Shobhit</p>
        <p className="welcome-description">Your table at Legends Microbrewery is ready.</p>

        <button
          autoFocus
          className="welcome-continue"
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
