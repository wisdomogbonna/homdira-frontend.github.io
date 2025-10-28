import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
    const [page, setPage] = useState("home");
      const [user, setUser] = useState(null);

        useEffect(() => {
            // Load splash screen for 3s
                const timer = setTimeout(() => setLoading(false), 3000);

                    // Retrieve saved user info
                        const storedUser = localStorage.getItem("user");
                            if (storedUser) {
                                  setUser(JSON.parse(storedUser));
                                      }

                                          return () => clearTimeout(timer);
                                            }, []);

                                              if (loading) return <SplashScreen />;

                                                // Not logged in
                                                  if (!user) {
                                                      if (page === "login") return <Login setPage={setPage} setUser={setUser} />;
                                                          if (page === "register") return <Register setPage={setPage} />;
                                                              return <Login setPage={setPage} setUser={setUser} />;
                                                                }

                                                                  // Logged in user
                                                                    return (
                                                                        <>
                                                                              <Navbar user={user} setUser={setUser} setPage={setPage} />
                                                                                    <Home setPage={setPage} user={user} />
                                                                                        </>
                                                                                          );
                                                                                          }

                                                                                          export default App;