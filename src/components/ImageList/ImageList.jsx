import React, { useEffect, useState } from 'react';

import { ImageListWrapper } from './styles';

const MY_KEY = 'xstKid8AQHGXc84dq0rAya-Fz-vrMrQ1nJEbSKZb3LY';

export const ImageList = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);

  const fetchPhotos = async () => {
    try {
      const url = `https://api.unsplash.com/photos/random?client_id=${MY_KEY}&count=5`;
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
      {photos.length > 0 && (
        <div>
          {photos.map((photo) => (
            <div key={photo.id}>
              <h2>{photo.alt_description}</h2>
              <p>
                Дата добавления:
                <span> {photo.created_at}</span>
              </p>
              <img
                width={320}
                height={200}
                src={photo.urls.regular}
                alt={photo.alt_description}
              />
            </div>
          ))}
        </div>
      )}
    </ImageListWrapper>
  );
};
