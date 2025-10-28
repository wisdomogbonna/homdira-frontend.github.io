import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
      const [loading, setLoading] = useState(true);
        const [page, setPage] = useState("home");
          const [user, setUser] = useState(null);

            useEffect(() => {
                    const timer = setTimeout(() => setLoading(false), 3000);
                        return () => clearTimeout(timer);
            }, []);

              if (loading) return <SplashScreen />;

                if (!user) {
                        if (page === "login") return <Login setPage={setPage} setUser={setUser} />;
                            if (page === "register") return <Register setPage={setPage} />;
                }

                  return <Home setPage={setPage} user={user} />;
            }

            export default App;
                }
            })
}