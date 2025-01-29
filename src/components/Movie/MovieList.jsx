import React from 'react';
import "./MovieList.css";

function MovieList({ movies = [], onEdit, onDelete }) {
  return (
    <ul className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <span className="movie-title">{movie}</span>
            <div className="buttons">
              <button className="edit" onClick={() => onEdit(index)}>Edit</button>
              <button className="delete" onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))
      ) : (
        <li className="empty-message">No movies added yet.</li>
      )}
    </ul>
  );
}

export default MovieList;
