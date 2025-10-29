import React from "react";
import PaystackPop from "@paystack/inline-js";
import Navbar from "../components/Navbar";
import "./Premium.css";

function Premium() {
  const handlePayment = () => {
      const email = localStorage.getItem("userEmail") || "landlord@example.com";

          const paystack = new PaystackPop();
              paystack.newTransaction({
                    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
                          email: email,
                                amount: 300000, // ₦3,000 in kobo
                                      onSuccess: (transaction) => {
                                              alert(`✅ Payment successful! Ref: ${transaction.reference}`);
                                                      window.location.href = "/premium-success";
                                                            },
                                                                  onCancel: () => {
                                                                          alert("❌ Payment cancelled");
                                                                                },
                                                                                    });
                                                                                      };

                                                                                        return (
                                                                                            <>
                                                                                                  <Navbar />
                                                                                                        <div className="premium-container">
                                                                                                                <h1 className="premium-title">Go Premium</h1>
                                                                                                                        <p className="premium-subtitle">
                                                                                                                                  Unlock the best of <span>Homdira</span> — more visibility, unlimited
                                                                                                                                            listings, and priority support.
                                                                                                                                                    </p>

                                                                                                                                                            <div className="premium-card">
                                                                                                                                                                      <h2>Premium Landlord Plan</h2>
                                                                                                                                                                                <ul>
                                                                                                                                                                                            <li>🏠 Unlimited apartment postings</li>
                                                                                                                                                                                                        <li>👁️‍🗨️ More views and reach to tenants</li>
                                                                                                                                                                                                                    <li>⭐ Featured property listings</li>
                                                                                                                                                                                                                                <li>📞 Priority contact support</li>
                                                                                                                                                                                                                                          </ul>
                                                                                                                                                                                                                                                    <div className="price-section">
                                                                                                                                                                                                                                                                <h3>
                                                                                                                                                                                                                                                                              ₦3,000 <span>/month</span>
                                                                                                                                                                                                                                                                                          </h3>
                                                                                                                                                                                                                                                                                                      <button className="pay-btn" onClick={handlePayment}>
                                                                                                                                                                                                                                                                                                                    Pay with Paystack
                                                                                                                                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                                                  </div>

                                                                                                                                                                                                                                                                                                                                                          <p className="note">
                                                                                                                                                                                                                                                                                                                                                                    Secure payment powered by <strong>Paystack</strong>.
                                                                                                                                                                                                                                                                                                                                                                            </p>
                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                      </>
                                                                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                        export default Premium; // 👈 VERY IMPORTANT LINE