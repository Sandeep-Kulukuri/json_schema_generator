import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState([]);

  const handleAddField = () => {
    setFormData((prev) => [
      ...prev,
      { id: Date.now(), name: "", dataType: "", validationInstructions: "" },
    ]);
  };

  return (
    <>
      <h2>Dynamic Json Schema Generator</h2>
      <div className="form">
        <form>
          <div className="flex-container">
            <label>Field Name</label>
            <label>Data Type</label>
            <button onClick={handleAddField}>Add Field</button>

            {formData &&
              formData.map((field) => (
                
                <ul key={field.id}>
               <li>{field.name}</li>
             </ul>
              ))}
          </div>
        </form>
      </div>
      <div>
        <h4>Json Schema Output</h4>
        <div className="schema-output">
          <button className="copy-btn">copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
