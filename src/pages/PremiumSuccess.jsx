import React from "react";

export default function PremiumSuccess() {
  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', background:'#f9fff9'}}>
      <div className="card center" style={{maxWidth:520, padding:28}}>
        <div style={{fontSize:48, color:'#2e8b57'}}>✅</div>
        <h2 style={{color:'#2e8b57', marginTop:8}}>Payment Successful</h2>
        <p style={{color:'#333'}}>Thank you — your Homdira Premium features are now active. You can now post unlimited properties and enjoy more visibility.</p>
        <div style={{marginTop:16}}>
          <button className="btn" onClick={() => window.location.href = "/"}>Back to Home</button>
        </div>
      </div>
    </div>
  );
}