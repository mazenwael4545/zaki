import Topbar from "./components/Topbar";
import Checklist from "./components/Checklist";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pomodoro from "./components/Pomodoro";

function App() {
  return (
    <div dir="rtl" className="bg-yellow-100 h-screen">
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Checklist />} />
          <Route path="/pomo" element={<Pomodoro />}/>
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
