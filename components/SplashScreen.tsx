"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash-backdrop">
      <div className="splash-container">
        <div className="splash-ring" />
        <div className="splash-ring splash-ring-delayed" />
        <Image
          alt="Logo"
          className="splash-logo"
          height={512}
          priority
          src="/logo.png"
          width={512}
        />
      </div>
    </div>
  );
}
