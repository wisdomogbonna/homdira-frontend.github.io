import { useEffect, useState } from "react";
import PropertyList from "./PropertyList";
import AddProperty from "./AddProperty";

function Home({ setPage, user }) {
  const [properties, setProperties] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
      const [search, setSearch] = useState("");

        const fetchProperties = async () => {
            const res = await fetch("https://homdira-backend.onrender.com/api/properties");
                const data = await res.json();
                    setProperties(data);
                      };

                        useEffect(() => {
                            fetchProperties();
                              }, []);

                                const filtered = properties.filter(p =>
                                    p.title.toLowerCase().includes(search.toLowerCase()) ||
                                        p.location.toLowerCase().includes(search.toLowerCase())
                                          );

                                            return (
                                                <div className="home-container">
                                                      <header className="home-header">
                                                              <h2>🏠 Homdira</h2>
                                                                      <input
                                                                                type="text"
                                                                                          placeholder="Search location or apartment..."
                                                                                                    value={search}
                                                                                                              onChange={(e) => setSearch(e.target.value)}
                                                                                                                        className="search-bar"
                                                                                                                                />
                                                                                                                                        {user?.role === "landlord" && (
                                                                                                                                                  <button onClick={() => setShowAdd(!showAdd)}>
                                                                                                                                                              {showAdd ? "Back to Listings" : "Add Property"}
                                                                                                                                                                        </button>
                                                                                                                                                                                )}
                                                                                                                                                                                        <button onClick={() => setPage("login")}>Logout</button>
                                                                                                                                                                                              </header>

                                                                                                                                                                                                    {showAdd ? (
                                                                                                                                                                                                            <AddProperty user={user} refresh={fetchProperties} />
                                                                                                                                                                                                                  ) : (
                                                                                                                                                                                                                          <PropertyList properties={filtered} />
                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                      export default Home;