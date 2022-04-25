import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Acceuil from "./components/Acceuil/Acceuil";
import Home from "./pages/home/Home";
import UserProfile from "./pages/UserProfile/UserProfile";
import Support from "./pages/Support/Support";
import List from "./pages/list/List";
import Login from "./components/Login/Login";
import Signup from "./components/Register/Signup";
import ResetPass from "./components/ResetPassword/ResetPass";
import PhoneSignup from "./components/PhoneRegister/PhoneSignup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { useContext, Suspense } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Suspense fallback={null}>
        <BrowserRouter>
          <UserAuthContextProvider>
            <ToastContainer
              className="foo"
              style={{ width: "300px", height: "10px" }}
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover
              theme="dark"
              transition={Slide}
            />

            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Signup />} />
                <Route path="phonesignup" element={<PhoneSignup />} />
                <Route path="resetpassword" element={<ResetPass />} />
                <Route
                  path="home"
                  element={
                    <ProtectedRoute>
                      <Acceuil />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="support"
                  element={
                    <ProtectedRoute>
                      <Support />
                    </ProtectedRoute>
                  }
                />

                <Route path="users">
                  <Route
                    index
                    element={
                      <ProtectedRoute>
                        <List />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="userprofile"
                    element={
                      <ProtectedRoute>
                        <UserProfile />
                      </ProtectedRoute>
                    }
                  />
                </Route>

                <Route path="products">
                  <Route
                    index
                    element={
                      <ProtectedRoute>
                        <List />
                      </ProtectedRoute>
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </UserAuthContextProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
