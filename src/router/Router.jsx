import { Route, Routes } from "react-router-dom";
import UserDashBord from "../components/UserDashBord";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashbord" element={<UserDashBord />} />
    </Routes>
  );
};

export default Router;
