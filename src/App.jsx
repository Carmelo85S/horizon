import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./page/home/Home";
import './App.css';
function App() {

  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
     </HashRouter>
  )
}

export default App
