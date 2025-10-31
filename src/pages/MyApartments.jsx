import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MyApartments({ user }) {
  const [apartments, setApartments] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => { if (user) fetchMine(); }, [user]);

  const fetchMine = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties/user/${user._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setApartments(res.data || []);
    } catch (err) { console.error(err); }
  };

  const del = async (id) => {
    if (!confirm("Delete this listing?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/properties/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchMine();
    } catch (err) { console.error(err); alert("Failed"); }
  };

  return (
    <div className="container">
      <h2 style={{color:'#2e8b57', marginBottom:10}}>My Apartments</h2>
      <div className="grid">
        {apartments.length === 0 ? <div className="card center">No apartments yet</div> :
          apartments.map(a => (
            <div key={a._id} className="card">
              {a.image && <img src={a.image} alt={a.title} style={{width:'100%', height:180, objectFit:'cover', borderRadius:8}}/>}
              <div style={{padding:12}}>
                <h4 style={{color:'#2e8b57'}}>{a.title}</h4>
                <div className="hint">📍 {a.location}</div>
                <div style={{marginTop:10, display:'flex', gap:8}}>
                  <button className="btn" onClick={() => window.location.href = `/edit/${a._id}`}>Edit</button>
                  <button className="btn ghost" onClick={() => del(a._id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}