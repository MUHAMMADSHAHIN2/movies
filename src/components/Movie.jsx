import React from 'react';

function Movie({ title, image, description }) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card cardHeight" >
        <img
          src={`https://image.tmdb.org/t/p/w500${image}`}
          className="px-2 pt-2 rounded-bottom-0 rounded-4 card-image-top movie-image"
          alt=""
        />
        <div className="card-body cardFlex pt-2 mt-2">
          <h5 className="card-title fw-bold fs-4">{title}</h5>
          <p className="card-text textCard text-secondary fw-medium fs-6">{`Release Date: ${description}`}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;