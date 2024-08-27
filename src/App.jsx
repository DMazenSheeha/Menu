import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
  }, []);
  return (
    <>
      {!isLoaded ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="loader"></span>
        </div>
      ) : (
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="*"
              element={
                <h1 style={{ margin: "50px auto", textAlign: "center" }}>
                  404 <br /> Page Not Found
                </h1>
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
