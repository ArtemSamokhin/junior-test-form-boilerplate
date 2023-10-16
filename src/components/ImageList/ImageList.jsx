import React, { useEffect, useState } from 'react';

import { ImageListWrapper } from './styles';

const MY_KEY = 'xstKid8AQHGXc84dq0rAya-Fz-vrMrQ1nJEbSKZb3LY';

export const ImageList = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const fetchPhotos = async () => {
    try {
      const url = `https://api.unsplash.com/photos/random?client_id=${MY_KEY}&count=4`;
      const response = await fetch(url);
      const data = await response.json();

      setPhotos(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <ImageListWrapper>
      {error && (
        <div className="container">
          <button onClick={fetchPhotos} className="new-photos">
            Нажмите, чтобы увидеть новые фотографии!
          </button>
          <div className="error-message">
            При загрузке фотографий произошла ошибка. Пожалуйста, повторите
            попытку позже.
          </div>
        </div>
      )}
      {photos.length > 0 && (
        <div className="container">
          <p className="desc">
            Простой веб-сайт, использующий Unsplash API для генерации случайных
            фотографии в виде карточек
          </p>
          <button onClick={fetchPhotos} className="new-photos">
            Нажмите, чтобы увидеть новые фотографии!
          </button>
          {photos.map((photo) => (
            <div className="photo-div" key={photo.id}>
              <img src={photo.urls.regular} alt={photo.alt_description} />
              <p className="photo-desc">{photo.alt_description}</p>
            </div>
          ))}
        </div>
      )}
    </ImageListWrapper>
  );
};
