import { useState, useEffect } from "react";
import "./MovieInput.css";

function MovieInput({ onAddOrEdit, editingIndex, movies }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (editingIndex !== null) {
      setInputValue(movies[editingIndex]);
    }
  }, [editingIndex, movies]);

  const handleSubmit = () => {
    onAddOrEdit(inputValue, editingIndex);
    setInputValue("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter movie title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editingIndex !== null ? "Edit" : "Add"}
      </button>
    </div>
  );
}

export default MovieInput;

