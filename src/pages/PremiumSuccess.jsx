import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./PremiumSuccess.css";

function PremiumSuccess() {
  const navigate = useNavigate();

    return (
        <>
              <Navbar />
                    <div className="success-container">
                            <div className="success-card">
                                      <div className="success-icon">✅</div>
                                                <h1>Payment Successful!</h1>
                                                          <p>
                                                                      Congratulations 🎉 You’re now a <strong>Homdira Premium Landlord</strong>.
                                                                                </p>
                                                                                          <p className="info">
                                                                                                      You can now post unlimited apartments and enjoy boosted visibility.
                                                                                                                </p>

                                                                                                                          <button className="home-btn" onClick={() => navigate("/")}>
                                                                                                                                      Back to Home
                                                                                                                                                </button>
                                                                                                                                                        </div>
                                                                                                                                                              </div>
                                                                                                                                                                  </>
                                                                                                                                                                    );
                                                                                                                                                                    }

                                                                                                                                                                    export default PremiumSuccess;