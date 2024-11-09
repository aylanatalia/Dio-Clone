import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import {Home} from "./pages/Home";
import { Login } from "./pages/Login";
import { Feed } from "./pages/Feed";
import { Cadastro } from "./pages/Cadastro";

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastrar" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
