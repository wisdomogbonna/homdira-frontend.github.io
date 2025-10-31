import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

export default function SplashScreen() {
  const [text, setText] = useState("");
  const full = "Homdira";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setText(full.slice(0, i+1));
      i++;
      if (i === full.length) clearInterval(t);
    }, 180);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="splash-screen">
      <div className="splash-card">
        <div className="splash-emoji">🏡</div>
        <h1 className="splash-title">{text}</h1>
      </div>
    </div>
  );
}