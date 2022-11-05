import { useState } from "react";
import React from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (type, massage) => {
    setalert({
      massage: massage,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Dark Mode Has Been Enabled");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode Has Been Enabled");
    }
  };
  return (
    <BrowserRouter>
      <Navbar
        title="TextUtils"
        about="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/TextUtils"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter some text"
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
        </Routes>
        {/* <TextForm heading="Enter some text" mode={mode} showAlert={showAlert} /> */}
        <Alert alert={alert} />
      </div>

      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container my-3">
              <TextForm
                heading="Enter some text"
                mode={mode}
                showAlert={showAlert}
              />
            </div>
          }
        />
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
