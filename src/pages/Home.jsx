import { useState, useEffect } from "react";
import AddProperty from "../components/AddProperty";

function Home({ user }) {
  const [properties, setProperties] = useState([]);
    const [search, setSearch] = useState("");

      const fetchProperties = async () => {
          const res = await fetch(`https://homdira-backend.onrender.com/api/properties`);
              const data = await res.json();
                  setProperties(data);
                    };

                      useEffect(() => {
                          fetchProperties();
                            }, []);

                              const filtered = properties.filter(
                                  (p) =>
                                        p.title.toLowerCase().includes(search.toLowerCase()) ||
                                              p.location.toLowerCase().includes(search.toLowerCase())
                                                );

                                                  return (
                                                      <div className="home-container">
                                                            <div className="home-header">
                                                                    <h2>
                                                                              {user.role === "landlord" ? "My Apartments" : "Available Apartments"}
                                                                                      </h2>
                                                                                              <input
                                                                                                        className="search-bar"
                                                                                                                  placeholder="Search by location..."
                                                                                                                            value={search}
                                                                                                                                      onChange={(e) => setSearch(e.target.value)}
                                                                                                                                              />
                                                                                                                                                    </div>

                                                                                                                                                          {user.role === "landlord" && (
                                                                                                                                                                  <AddProperty user={user} onAdded={fetchProperties} />
                                                                                                                                                                        )}

                                                                                                                                                                              <div className="property-list">
                                                                                                                                                                                      {filtered.length === 0 ? (
                                                                                                                                                                                                <p>No apartments found.</p>
                                                                                                                                                                                                        ) : (
                                                                                                                                                                                                                  filtered.map((p) => (
                                                                                                                                                                                                                              <div key={p._id} className="property-card">
                                                                                                                                                                                                                                            <img src={p.image} alt={p.title} className="property-img" />
                                                                                                                                                                                                                                                          <h3>{p.title}</h3>
                                                                                                                                                                                                                                                                        <p>₦{p.price.toLocaleString()}</p>
                                                                                                                                                                                                                                                                                      <p>{p.location}</p>
                                                                                                                                                                                                                                                                                                    <p>{p.description}</p>
                                                                                                                                                                                                                                                                                                                  {user.role === "tenant" && (
                                                                                                                                                                                                                                                                                                                                  <button
                                                                                                                                                                                                                                                                                                                                                    onClick={() =>
                                                                                                                                                                                                                                                                                                                                                                        alert(`Contact landlord: ${p.contact || "N/A"}`)
                                                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                                                                          >
                                                                                                                                                                                                                                                                                                                                                                                                                            Message Landlord
                                                                                                                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                          )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ))
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    export default Home;