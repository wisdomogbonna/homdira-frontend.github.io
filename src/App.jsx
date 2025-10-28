import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
            return () => clearTimeout(timer);
              }, []);

                return loading ? <SplashScreen /> : <Home />;
                }

                export default App;