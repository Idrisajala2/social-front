import Header from "./components/Header/Header";
import Home from "./components/HomeScreen/Home";
import DetailScreen from "./components/HomeScreen/DetailScreen";
import Register from "./components/register/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResetPassword from "./components/register/ResetPassword";
import SignIn from "./components/register/Signin";
import NewPassword from "./components/register/NewPassword";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<DetailScreen />} />
          <Route path="/reg" element={<Register />} />

          <Route path="/requestReset" element={<ResetPassword />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
