import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/Signup/SignUp.jsx";
import { User } from "./pages/User";
import SharedLayout from "./pages/SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Payment } from "./pages/Payment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route
          element={
            <ProtectedRoute/>
          }
        >
          <Route path="/user" element={<User/>}/>
          <Route path='/payment' element={<Payment/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
