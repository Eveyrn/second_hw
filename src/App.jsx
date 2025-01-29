

import { useState } from "react";
import "./App.css";

import MovieInput from './components/Movie/Movieinput'
import MovieList from "./components/Movie/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrEdit = (title, index) => {
    if (title.trim() === "") return;
    setMovies((prevMovies) =>
      index !== null
        ? prevMovies.map((movie, i) => (i === index ? title : movie))
        : [...prevMovies, title]
    );
    if (index !== null) setEditingIndex(null);
  };

  const handleDelete = (index) => {
    setMovies((prevMovies) => prevMovies.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => setEditingIndex(index);

  return (
    <>
      <div className="box">
        <MovieInput onAddOrEdit={handleAddOrEdit} editingIndex={editingIndex} movies={movies} />
        <MovieList movies={movies} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;

