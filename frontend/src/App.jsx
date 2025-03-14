import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [className, setClassName] = useState("");
  const [classes, setClasses] = useState([]);

  const handleAddClass = () => {
    if (className.trim() == "") return; // prevents empty input
    setClasses([...classes, className]);
    setClassName("");
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddClass();
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Enter Your Classes</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Enter class name"
          style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <button 
          onClick={handleAddClass} 
          style={{ padding: "8px 12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Add
        </button>
      </div>
      <div style={{ marginTop: "15px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>Classes Entered:</h3>
        <ul style={{ marginTop: "10px", padding: "0", listStyle: "none" }}>
          {classes.map((cls, index) => (
            <li key={index} style={{ backgroundColor: "#f3f3f3", padding: "6px", borderRadius: "4px", marginBottom: "5px" }}>{cls}</li>
          ))}
        </ul>
      </div>
      <div>
        <button
          onClick={handleAddClass}
          style={{ padding: "8px 12px", backgroundColor: "#007bff", color: "white", border: "none", borderRadious: "4px", cursor: "pointer"}}
        >
          Create Pomodoro
        </button>
      </div>
    </div>
  );
}

export default App
