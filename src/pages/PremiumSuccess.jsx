import React from "react";

const PremiumSuccess = () => {
  return (
    <div className="premium-success">
      <style>{`
        .premium-success {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #f9fdf9;
          color: #0a9d57;
          text-align: center;
        }

        .premium-success h2 {
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 700;
        }

        .premium-success p {
          font-size: 16px;
          color: #333;
        }

        .premium-success button {
          margin-top: 20px;
          background: #0a9d57;
          border: none;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }

        .premium-success button:hover {
          background: #087c44;
        }
      `}</style>

      <h2>🎉 Premium Activated!</h2>
      <p>Your premium features are now unlocked.</p>
      <button onClick={() => (window.location.href = "/")}>Back to Home</button>
    </div>
  );
};

export default PremiumSuccess;