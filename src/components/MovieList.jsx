import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  return (
    <div className="row mt-4 gy-3 my-3 pt-3">
      {movies.map((movie, index) => (
        <Movie key={index} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;