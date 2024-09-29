import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";
import { useEffect, useState } from "react";
import React from "react";
import { FaStar } from "react-icons/fa";

function Movie({ id, coverImg, title, genres, rating }) {
  const [showCover, setShowCover] = useState(false);
  const hoverEvent = () => {
    setShowCover(true);
  }
  const hoverOutEvent = () => {
    setShowCover(false);
  }

  const ImageCover = React.memo(() => {
    return (
      <div className="image_cover">
        <div className="score_box">
          <FaStar/> <span className="score_text">{`${rating} / 10`}</span>
        </div>
        <Link to={`/movie/${id}`}><button className="detail_button">Detail</button></Link>
      </div>
    );
  });

  return (
    <div className="movie_card">
      
      <span className="image_box" onMouseEnter={hoverEvent} onMouseLeave={hoverOutEvent}>
        <img className="image" src={coverImg}/>
        {showCover && <ImageCover/>}
      </span>
      <div className={`movie_title${showCover ? ' moveDown' : ''}`}>{title}</div>
      <div className={`tag_box${showCover ? ' moveDown' : ''}`}>
        { genres?.map((g, gi) => <span key={gi} className="tag">{g}</span>) }
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired
};

export default Movie;