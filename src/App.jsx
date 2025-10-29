import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Premium from "./pages/Premium";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyApartments from "./pages/MyApartments";
import SplashScreen from "./components/SplashScreen";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500); // 2.5s splash delay
            return () => clearTimeout(timer);
              }, []);

                if (loading) return <SplashScreen />;

                  return (
                      <Router>
                            <Routes>
                                    <Route path="/" element={<Home />} />
                                            <Route path="/premium" element={<Premium />} />
                                                    <Route path="/my-apartments" element={<MyApartments />} />
                                                            <Route path="/login" element={<Login />} />
                                                                    <Route path="/register" element={<Register />} />
                                                                          </Routes>
                                                                              </Router>
                                                                                );
                                                                                }

                                                                                export default App;