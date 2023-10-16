import { ImageList } from './components/ImageList/ImageList';
import { Form } from './components/Form/Form';

function App() {
  return (
    <>
      <header>
        <h1>Тестовое задание</h1>
      </header>
      <main>
        <section>
          <Form />
          <ImageList />
        </section>
      </main>
    </>
  );
}

export default App;
