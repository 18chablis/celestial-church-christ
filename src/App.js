import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Sidebar from "./components/Sidebar";
import { LOCALES } from "./lang/locales";
import { IntlProvider } from "react-intl";
import { messages } from "./lang/messages";
const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Parish = lazy(() => import("./pages/Parish"));
const Shepherd = lazy(() => import("./pages/Shepherd"));
const Anointment = lazy(() => import("./pages/Anointment"));
const Setting = lazy(() => import("./pages/Setting"));

const App = () => {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    // storing locale in the localstorage
    localStorage.setItem("locale", e.target.value);
  };

  //localstorage
  function getInitialLocal() {
    // getting stored items
    const savedLocale = localStorage.getItem("locale");
    return savedLocale || LOCALES.ENGLISH;
  }
  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <div className="main">
        <Router>
          <Sidebar />
          <div className="content">
            <Routes>
              <Route exact path="/dashboard" element={<PrivateRoute />}>
                <Route
                  exact
                  path="/dashboard"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Dashboard />
                    </Suspense>
                  }
                />
              </Route>
              <Route exact path="/parish" element={<PrivateRoute />}>
                <Route
                  exact
                  path="/parish"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Parish />
                    </Suspense>
                  }
                />
              </Route>
              <Route exact path="/shepherd" element={<PrivateRoute />}>
                <Route
                  exact
                  path="/shepherd"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Shepherd />
                    </Suspense>
                  }
                />
              </Route>
              <Route exact path="/anointment" element={<PrivateRoute />}>
                <Route
                  exact
                  path="/anointment"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Anointment />
                    </Suspense>
                  }
                />
              </Route>
              <Route exact path="/setting" element={<PrivateRoute />}>
                <Route
                  exact
                  path="/setting"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Setting
                        currentLocale={currentLocale}
                        handleChange={handleChange}
                      />
                    </Suspense>
                  }
                />
              </Route>

              <Route
                exact
                path="/login"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                exact
                path="/"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Welcome />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </Router>
      </div>
    </IntlProvider>
  );
};

export default App;
