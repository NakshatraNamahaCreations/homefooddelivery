"use client";

import { useEffect, useState } from "react";

export default function Splash() {
  // `visible` keeps it in the DOM; `fading` toggles the opacity 1 → 0 transition
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // lock body scroll while splash is up
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // schedule the fade and removal
    const fadeOut = setTimeout(() => setFading(true), 2000);
    const remove = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = prev;
    }, 2700);

    return () => {
      clearTimeout(fadeOut);
      clearTimeout(remove);
      document.body.style.overflow = prev;
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`hp-splash is-show ${fading ? "is-hide" : ""}`} aria-hidden="true">
      {/* warm radial backdrop */}
      <span className="hp-splash-bg" />

      {/* drifting flecks */}
      <span className="hp-splash-fleck hp-splash-fleck-1" />
      <span className="hp-splash-fleck hp-splash-fleck-2" />
      <span className="hp-splash-fleck hp-splash-fleck-3" />
      <span className="hp-splash-fleck hp-splash-fleck-4" />
      <span className="hp-splash-fleck hp-splash-fleck-5" />

      <div className="hp-splash-stage">
        {/* logo group — same cloche as the navbar, scaled up */}
        <div className="hp-splash-logo">
          <span className="hp-splash-leaf hp-splash-leaf-l" aria-hidden="true">
            <svg viewBox="0 0 24 40" width="40" height="66" fill="#7cbf3f">
              <path d="M12 2c4 4 8 12 6 22-1 5-4 10-6 14-2-4-5-9-6-14-2-10 2-18 6-22z" />
            </svg>
          </span>
          <span className="hp-splash-leaf hp-splash-leaf-r" aria-hidden="true">
            <svg viewBox="0 0 24 40" width="40" height="66" fill="#7cbf3f">
              <path d="M12 2c4 4 8 12 6 22-1 5-4 10-6 14-2-4-5-9-6-14-2-10 2-18 6-22z" />
            </svg>
          </span>

          <div className="hp-splash-pizza" aria-hidden="true">
            <svg width="140" height="110" viewBox="0 0 64 50">
              {/* steam — animated */}
              <path className="hp-splash-steam s1" d="M22 5c0 3 -2 5 0 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path className="hp-splash-steam s2" d="M32 3c0 3 -2 5 0 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              <path className="hp-splash-steam s3" d="M42 5c0 3 -2 5 0 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" fill="none" />
              {/* dome */}
              <path d="M8 36 C8 22, 20 14, 32 14 C44 14, 56 22, 56 36 Z" fill="#e63946" stroke="#fff" strokeWidth="1.5" />
              {/* dome handle */}
              <circle cx="32" cy="16" r="2.8" fill="#f4c542" stroke="#fff" strokeWidth="1" />
              {/* plate */}
              <ellipse cx="32" cy="38" rx="28" ry="3" fill="#f4c542" stroke="#fff" strokeWidth="1" />
              <ellipse cx="32" cy="38" rx="28" ry="3" fill="none" stroke="#c89422" strokeWidth="0.8" />
            </svg>
          </div>

          {/* animated ring around the logo */}
          <span className="hp-splash-ring" aria-hidden="true" />
          <span className="hp-splash-ring hp-splash-ring-2" aria-hidden="true" />
        </div>

        <div className="hp-splash-brand">HomePlate</div>
        <div className="hp-splash-tag">Homemade Food, Delivered Warm</div>

        {/* loading dots */}
        <div className="hp-splash-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}
