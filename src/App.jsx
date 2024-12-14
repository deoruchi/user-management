import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import "./App.css";
import { Routes, Route } from "react-router";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
