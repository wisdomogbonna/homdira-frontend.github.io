import { useState } from "react";

function Login({ setPage, setUser }) {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
        const [error, setError] = useState("");

          const handleLogin = async (e) => {
              e.preventDefault();
                  setLoading(true);
                      setError("");

                          try {
                                const res = await fetch("https://homdira-backend.onrender.com/api/auth/login", {
                                        method: "POST",
                                                headers: { "Content-Type": "application/json" },
                                                        body: JSON.stringify({ email, password }),
                                                              });

                                                                    const data = await res.json();
                                                                          if (!res.ok) throw new Error(data.message || "Login failed");

                                                                                localStorage.setItem("token", data.token);
                                                                                      localStorage.setItem("user", JSON.stringify(data.user));
                                                                                            setUser(data.user);
                                                                                                } catch (err) {
                                                                                                      setError(err.message);
                                                                                                          } finally {
                                                                                                                setLoading(false);
                                                                                                                    }
                                                                                                                      };

                                                                                                                        return (
                                                                                                                            <div className="auth-container">
                                                                                                                                  <h2>Login</h2>
                                                                                                                                        {error && <p className="error">{error}</p>}

                                                                                                                                              <form onSubmit={handleLogin}>
                                                                                                                                                      <input
                                                                                                                                                                type="email"
                                                                                                                                                                          placeholder="Email"
                                                                                                                                                                                    value={email}
                                                                                                                                                                                              onChange={(e) => setEmail(e.target.value)}
                                                                                                                                                                                                        required
                                                                                                                                                                                                                />

                                                                                                                                                                                                                        <input
                                                                                                                                                                                                                                  type="password"
                                                                                                                                                                                                                                            placeholder="Password"
                                                                                                                                                                                                                                                      value={password}
                                                                                                                                                                                                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                                                                                                                                                                                                          required
                                                                                                                                                                                                                                                                                  />

                                                                                                                                                                                                                                                                                          <button type="submit" disabled={loading}>
                                                                                                                                                                                                                                                                                                    {loading ? "Logging in..." : "Login"}
                                                                                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                                                                                                  </form>

                                                                                                                                                                                                                                                                                                                        <p>
                                                                                                                                                                                                                                                                                                                                Don’t have an account?{" "}
                                                                                                                                                                                                                                                                                                                                        <span onClick={() => setPage("register")} className="link">
                                                                                                                                                                                                                                                                                                                                                  Register here
                                                                                                                                                                                                                                                                                                                                                          </span>
                                                                                                                                                                                                                                                                                                                                                                </p>
                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                                                                                      export default Login;