import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyApartments from "./pages/MyApartments";
import Premium from "./pages/Premium";
import PremiumSuccess from "./pages/PremiumSuccess";
import SplashScreen from "./components/SplashScreen";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

    // Splash screen delay (2.5 seconds)
      useEffect(() => {
          const timer = setTimeout(() => setLoading(false), 2500);
              return () => clearTimeout(timer);
                }, []);

                  if (loading) return <SplashScreen />;

                    return (
                        <Router>
                              <Routes>
                                      <Route path="/" element={<Home />} />
                                              <Route path="/login" element={<Login />} />
                                                      <Route path="/register" element={<Register />} />
                                                              <Route path="/my-apartments" element={<MyApartments />} />
                                                                      <Route path="/premium" element={<Premium />} />
                                                                              <Route path="/premium-success" element={<PremiumSuccess />} />
                                                                                    </Routes>
                                                                                        </Router>
                                                                                          );
                                                                                          }

                                                                                          export default App;