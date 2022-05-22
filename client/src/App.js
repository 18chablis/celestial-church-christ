import { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LOCALES } from "./lang/locales";
import { messages } from "./lang/messages";
import AnointmentRequestForm from "./page/AnointmentRequestForm";

import "./style/app.css";
function App() {
  const [currentLocale, setCurrentLocale] = useState(getInitialLocal());

  const handleChange = (e) => {
    setCurrentLocale(e.target.value);
    // storing locale in the localstorage
    localStorage.setItem("locale", e.target.value);
  };

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
      <Router>
        <Routes>
          <Route
            exact
            path="/anointment-request"
            element={
              <AnointmentRequestForm
                currentLocale={currentLocale}
                handleChange={handleChange}
              />
            }
          />
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
