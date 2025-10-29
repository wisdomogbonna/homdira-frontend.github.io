import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

      const handleChange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
            };

              const handleSubmit = async (e) => {
                  e.preventDefault();

                      const res = await fetch("https://homdira-backend.onrender.com/api/auth/login", {
                            method: "POST",
                                  headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(form),
                                            });

                                                const data = await res.json();

                                                    if (res.ok) {
                                                          localStorage.setItem("token", data.token);
                                                                navigate("/");
                                                                    } else {
                                                                          alert(data.message || "Login failed");
                                                                              }
                                                                                };

                                                                                  return (
                                                                                      <div className="auth-container">
                                                                                            <div className="auth-box">
                                                                                                    <h2 className="auth-title">Welcome Back 👋</h2>
                                                                                                            <p className="auth-subtitle">Login to continue to Homdira</p>

                                                                                                                    <form onSubmit={handleSubmit}>
                                                                                                                              <input
                                                                                                                                          type="email"
                                                                                                                                                      name="email"
                                                                                                                                                                  placeholder="Email"
                                                                                                                                                                              value={form.email}
                                                                                                                                                                                          onChange={handleChange}
                                                                                                                                                                                                      required
                                                                                                                                                                                                                />
                                                                                                                                                                                                                          <input
                                                                                                                                                                                                                                      type="password"
                                                                                                                                                                                                                                                  name="password"
                                                                                                                                                                                                                                                              placeholder="Password"
                                                                                                                                                                                                                                                                          value={form.password}
                                                                                                                                                                                                                                                                                      onChange={handleChange}
                                                                                                                                                                                                                                                                                                  required
                                                                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                                                                      <button type="submit" className="auth-btn">
                                                                                                                                                                                                                                                                                                                                  Login
                                                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                                                    </form>

                                                                                                                                                                                                                                                                                                                                                            <p className="auth-footer">
                                                                                                                                                                                                                                                                                                                                                                      Don’t have an account?{" "}
                                                                                                                                                                                                                                                                                                                                                                                <Link to="/register" className="auth-link">
                                                                                                                                                                                                                                                                                                                                                                                            Register
                                                                                                                                                                                                                                                                                                                                                                                                      </Link>
                                                                                                                                                                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                                                                                                                                                                          export default Login;