import Navbar from "../components/Navbar";
import AddProperty from "../components/AddProperty";
import { useState, useEffect } from "react";

function Home({ user }) {
  const [properties, setProperties] = useState([]);
    const [filtered, setFiltered] = useState([]);

      const fetchProperties = async () => {
          try {
                const res = await fetch("https://homdira-backend.onrender.com/api/properties");
                      const data = await res.json();
                            setProperties(data);
                                  setFiltered(data);
                                      } catch (err) {
                                            console.error(err);
                                                }
                                                  };

                                                    useEffect(() => {
                                                        fetchProperties();
                                                          }, []);

                                                            const handleSearch = (query) => {
                                                                const q = query.toLowerCase();
                                                                    const results = properties.filter(
                                                                          (p) =>
                                                                                  p.title.toLowerCase().includes(q) ||
                                                                                          p.location.toLowerCase().includes(q)
                                                                                              );
                                                                                                  setFiltered(results);
                                                                                                    };

                                                                                                      const handleLogout = () => {
                                                                                                          localStorage.removeItem("token");
                                                                                                              localStorage.removeItem("user");
                                                                                                                  window.location.href = "/login";
                                                                                                                    };

                                                                                                                      return (
                                                                                                                          <div className="home-page">
                                                                                                                                <Navbar user={user} onLogout={handleLogout} onSearch={handleSearch} />

                                                                                                                                      {user?.role === "landlord" && (
                                                                                                                                              <AddProperty user={user} onAdded={fetchProperties} />
                                                                                                                                                    )}

                                                                                                                                                          <div className="property-list">
                                                                                                                                                                  {filtered.length === 0 ? (
                                                                                                                                                                            <p>No apartments found.</p>
                                                                                                                                                                                    ) : (
                                                                                                                                                                                              filtered.map((p) => (
                                                                                                                                                                                                          <div key={p._id} className="property-card">
                                                                                                                                                                                                                        <img src={p.image} alt={p.title} />
                                                                                                                                                                                                                                      <h3>{p.title}</h3>
                                                                                                                                                                                                                                                    <p><strong>₦{p.price.toLocaleString()}</strong></p>
                                                                                                                                                                                                                                                                  <p>{p.location}</p>
                                                                                                                                                                                                                                                                                <p>{p.description}</p>
                                                                                                                                                                                                                                                                                              <p>📞 {p.contact}</p>
                                                                                                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                                                                                                    ))
                                                                                                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                        export default Home;