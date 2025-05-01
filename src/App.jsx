import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import LandingPage from "./pages/LandingPage/LandingPage";
import { UserContext, UserProvider } from "./context/AuthContext";
import AllProducts from "./pages/AllProducts/AllProducts";
import Navbar from "./components/Navbar";
import { useContext } from "react";

function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}

function AppContent() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar user={user} />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<AllProducts />} />
      </Routes>
    </>
  );
}

export default App;
