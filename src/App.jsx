import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyApartments from "./pages/MyApartments";
import Premium from "./pages/Premium";
import PremiumSuccess from "./pages/PremiumSuccess";
import SplashScreen from "./components/SplashScreen";
import SidebarMenu from "./components/SidebarMenu";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <SplashScreen />;

  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <Router>
      <SidebarMenu open={sidebarOpen} setOpen={setSidebarOpen} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={<Home setSidebarOpen={setSidebarOpen} user={user} />}
        />

        <Route
          path="/my-apartments"
          element={
            user?.role === "landlord" ? (
              <MyApartments setSidebarOpen={setSidebarOpen} user={user} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/listings"
          element={<Home setSidebarOpen={setSidebarOpen} user={user} />}
        />

        <Route
          path="/premium"
          element={<Premium setSidebarOpen={setSidebarOpen} />}
        />
        <Route path="/premium-success" element={<PremiumSuccess />} />
      </Routes>
    </Router>
  );
}