import { useState } from "react";
import { Link } from "react-router-dom";
import "./SidebarMenu.css";

function SidebarMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);

    return (
        <>
              <div className="sidebar-toggle" onClick={() => setOpen(!open)}>
                      ☰
                            </div>

                                  <div className={`sidebar ${open ? "open" : ""}`}>
                                          <div className="sidebar-header">
                                                    <h2>Homdira</h2>
                                                              <button className="close-btn" onClick={() => setOpen(false)}>×</button>
                                                                      </div>

                                                                              <nav className="sidebar-links">
                                                                                        <Link to="/" onClick={() => setOpen(false)}>🏠 Home</Link>
                                                                                                  {user && user.role === "landlord" && (
                                                                                                              <Link to="/my-apartments" onClick={() => setOpen(false)}>🏘️ My Apartments</Link>
                                                                                                                        )}
                                                                                                                                  <Link to="/premium" onClick={() => setOpen(false)}>💎 Go Premium</Link>
                                                                                                                                            <button onClick={onLogout} className="logout-btn">🚪 Logout</button>
                                                                                                                                                    </nav>
                                                                                                                                                          </div>
                                                                                                                                                              </>
                                                                                                                                                                );
                                                                                                                                                                }

                                                                                                                                                                export default SidebarMenu;