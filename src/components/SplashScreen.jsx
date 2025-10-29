import React, { useState, useEffect } from "react";
import "../components/SplashScreen.css";

function SplashScreen() {
  const [text, setText] = useState("");
    const fullText = "Homdira";

      useEffect(() => {
          let index = 0;
              const interval = setInterval(() => {
                    setText(fullText.substring(0, index + 1));
                          index++;
                                if (index === fullText.length) clearInterval(interval);
                                    }, 200);
                                        return () => clearInterval(interval);
                                          }, []);

                                            return (
                                                <div className="splash-container">
                                                      <div className="splash-logo">
                                                              🏡
                                                                      <h1 className="splash-text">{text}</h1>
                                                                            </div>
                                                                                </div>
                                                                                  );
                                                                                  }

                                                                                  export default SplashScreen;