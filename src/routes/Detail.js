import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const {id} = useParams();

  const [loading, setLoading] = useState(true);

  const getDetailInfo = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setLoading(false);
    console.log(json);
  }

  useEffect(() => {
    getDetailInfo();
  }, []);

  return (
    <div>
      { loading ? <h1>Loading...</h1> : null }
      { !loading &&
        null
      }
    </div>
  );
}

export default Detail;