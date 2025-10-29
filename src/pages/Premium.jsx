import React from "react";
import { useNavigate } from "react-router-dom";
import { PaystackButton } from "react-paystack";

const Premium = () => {
  const navigate = useNavigate();

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  const amount = 300000; // ₦3,000 in kobo
  const email = "user@example.com"; // replace with the logged-in user email

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Upgrade to Premium",
    onSuccess: () => navigate("/premium-success"),
    onClose: () => alert("Payment cancelled."),
  };

  return (
    <div className="premium-page">
      <style>{`
        .premium-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100vh;
          background-color: #f9fdf9;
          color: #0a9d57;
          padding: 20px;
        }
        .premium-card {
          background: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(10,157,87,0.15);
          max-width: 400px;
          width: 100%;
        }
        .premium-card h2 {
          font-size: 28px;
          margin-bottom: 15px;
        }
        .premium-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
          text-align: left;
        }
        .premium-card ul li {
          margin: 10px 0;
          color: #333;
        }
        .pay-btn {
          background: #0a9d57;
          color: #fff;
          border: none;
          padding: 12px 20px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 16px;
          width: 100%;
          transition: 0.3s ease;
        }
        .pay-btn:hover {
          background: #087c44;
        }
      `}</style>

      <div className="premium-card">
        <h2>Upgrade to Premium</h2>
        <p>Enjoy these exclusive benefits:</p>
        <ul>
          <li>✅ Unlimited property postings</li>
          <li>👀 Boosted visibility on listings</li>
          <li>💬 Priority tenant messaging</li>
          <li>📈 Access to analytics & insights</li>
        </ul>

        <PaystackButton className="pay-btn" {...componentProps} />
      </div>
    </div>
  );
};

export default Premium;