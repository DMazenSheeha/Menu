import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
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
  );
}

export default App;
