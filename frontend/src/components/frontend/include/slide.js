import React, {useEffect, useState} from 'react'
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const Slide = () => {

  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
        const response = await axios.get(`/api/commonData/slide_list`);
        const newData = response.data;
        setImageData(newData);
        setIsLoading(false);
    } catch (error) {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
      {imageData.map((item, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-current="true"
          aria-label={`Slide ${index}`}
        ></button>
      ))}
    </div>
        <div className="carousel-inner">
          {imageData.map((item, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img
                         src={`${process.env.PUBLIC_URL}/images/${item.slideImage}`}
                        className="d-block w-100"
                        alt={item.text}
                    />
                </div>
            ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
  )
}

export default Slide