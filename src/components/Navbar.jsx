import React, { useState } from "react";
import SearchModal from "./SearchModal";
import SidebarMenu from "./SidebarMenu";
import "./Navbar.css";

function Navbar({ user, onLogout, onSearch }) {
  const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
              <nav className="navbar">
                      <SidebarMenu user={user} onLogout={onLogout} />
                              <h1 className="brand">Homdira</h1>
                                      <button className="search-btn" onClick={() => setSearchOpen(true)}>
                                                🔍
                                                        </button>
                                                              </nav>

                                                                    {searchOpen && (
                                                                            <SearchModal
                                                                                      onClose={() => setSearchOpen(false)}
                                                                                                onSearch={onSearch}
                                                                                                        />
                                                                                                              )}
                                                                                                                  </>
                                                                                                                    );
                                                                                                                    }

                                                                                                                    export default Navbar;