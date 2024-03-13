import { Routes, Route } from "react-router-dom";
import Pochta from "./components/pochta/pochta";
import Register from "./components/register/register";
import Activation from "./components/Activation/Activation";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pochta />} />
        <Route path="login" element={<Pochta />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="register" element={<Register />} />
        <Route path="activation" element={<Activation />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
