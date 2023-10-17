import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form, ImageList } from './components';
import ApiPhoto from './components/ApiService';
import { MainContainer } from './styles';

function App() {
  const api = new ApiPhoto();
  const [photos, setPhotos] = useState([]);
  const randomID = (number) => Math.floor(Math.random() * number);

  useEffect(() => {
    api
      .getRandomPhoto({
        count: 5,
      })
      .then((newPhotos) => {
        setPhotos([...photos, ...newPhotos]);
        console.log(newPhotos);
      });
  }, []);

  const handleAddPhotos = (photo) => {
    const newItems = [
      { ...photo, id: randomID(10000), created_at: new Date() },
      ...photos,
    ];

    setPhotos(newItems);
    console.log(newItems);
  };

  const handleDeletePhoto = (id) => {
    const idx = photos.findIndex((element) => element.id === id);
    const newArrayPhoto = [...photos.slice(0, idx), ...photos.slice(idx + 1)];

    return setPhotos(newArrayPhoto);
  };

  return (
    <MainContainer>
      <header>
        <h1>Тестовое задание</h1>
      </header>
      <main>
        <section>
          <Form onSubmit={handleAddPhotos} />
          <hr />
          <ImageList photos={photos} onDeleteItem={handleDeletePhoto} />
        </section>
      </main>
    </MainContainer>
  );
}

export default App;
