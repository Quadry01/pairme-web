import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/Signup/SignUp.jsx";
import { User } from "./pages/User";
import SharedLayout from "./pages/SharedLayout";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
