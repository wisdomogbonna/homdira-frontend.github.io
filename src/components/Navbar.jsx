function Navbar({ user, setUser, setPage }) {
      const handleLogout = () => {
          localStorage.removeItem("token");
              localStorage.removeItem("user");
                  setUser(null);
                      setPage("login");
                        };

                          return (
                              <nav className="navbar">
                                    <h2 className="nav-logo">Homdira</h2>

                                          <div className="nav-links">
                                                  {user?.role === "landlord" && (
                                                            <button onClick={() => setPage("home")}>🏠 My Properties</button>
                                                                    )}
                                                                            {user?.role === "tenant" && (
                                                                                      <button onClick={() => setPage("home")}>🏘️ Find Apartments</button>
                                                                                              )}
                                                                                                      <button onClick={handleLogout}>🚪 Logout</button>
                                                                                                            </div>
                                                                                                                </nav>
                                                                                                                  );
                                                                                                                  }

                                                                                                                  export default Navbar;