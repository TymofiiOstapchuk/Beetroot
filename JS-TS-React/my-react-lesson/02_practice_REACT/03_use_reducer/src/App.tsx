import { Routes, Route } from "react-router-dom";
import Nav from "@/components/common/Nav";
import HomePage from "@/components/common/HomePage";
import Counter from "@/components/Counter";
import Button from "@/components/Button";
import ColorPicker from '@/components/ColorPicker'

function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/button" element={<Button />} />
        <Route path="/picker" element={<ColorPicker />} />
      </Routes>
    </div>
  );
}

export default App;
