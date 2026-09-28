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
        {/* logo group — brand logo with pulsing rings */}
        <div className="hp-splash-logo">
          <img src="/logo.jpeg" alt="" className="hp-splash-img" />

          {/* animated ring around the logo */}
          <span className="hp-splash-ring" aria-hidden="true" />
          <span className="hp-splash-ring hp-splash-ring-2" aria-hidden="true" />
        </div>

        <div className="hp-splash-tag">Homemade Food, Delivered Warm</div>

        {/* loading dots */}
        <div className="hp-splash-dots" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>
    </div>
  );
}
