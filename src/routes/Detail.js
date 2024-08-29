import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import { FaStar } from "react-icons/fa";

function Detail() {
  const {id} = useParams();

  const [loading, setLoading] = useState(true);
  const [detailInfo, setDetailInfo] = useState({});

  const getDetailInfo = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setDetailInfo(json.data.movie);
    setLoading(false);
  }

  console.log(detailInfo);

  useEffect(() => {
    getDetailInfo();
  }, []);

  return (
    <div className="detail_wrap">
      { loading ? <div className="loader"></div> : null }
      { !loading && (
        <div className="movie_item" style={{
          backgroundImage: `url(${detailInfo.background_image})`
        }}>
          <div className="info_box">
            <div className="cover_image">
              <img className="image" src={detailInfo.medium_cover_image}/>
            </div>
            <div className="info_content">
              <h1>{detailInfo.title_long}</h1>
              <div className="time_tag">{detailInfo.runtime} min</div>
              <span className="score_box">
                <FaStar/> 
                <span className="score_text">{`${detailInfo.rating} / 10`}</span>
              </span>
              <div className="des_box">
                {detailInfo.description_full ? detailInfo.description_full : 'No summary info'}
              </div>
              <div className="detail_tag_box">
                { detailInfo.genres.map((g, gi) => <span key={gi} className="detail_tag">{g}</span>) }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;