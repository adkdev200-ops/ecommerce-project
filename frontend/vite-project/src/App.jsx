import { Routes, Route, Navigate } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { token } = useContext(AuthContext);

  return (
    <>
      
      {token && <Navbar />}

      <Routes>
  

        <Route
          path="/login"
          element={
            token ? <Navigate to="/" /> : <LoginSignup />
          }
        />

    
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/mens"
          element={
            <ProtectedRoute>
              <Men />
            </ProtectedRoute>
          }
        />

        <Route
          path="/womens"
          element={
            <ProtectedRoute>
              <Women />
  
            </ProtectedRoute>
          }
        />

        <Route
          path="/kids"
          element={
            <ProtectedRoute>
              <Kids />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
}

export default App;