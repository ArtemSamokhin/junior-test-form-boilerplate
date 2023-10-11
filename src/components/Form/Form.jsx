import { useForm } from 'react-hook-form';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Название фото
        <input
          type="text"
          placeholder="Yosemite National Park"
          {...register('namePhoto', {
            required: 'Наименование фото не заполнено',
            minLength: {
              value: 2,
              message: 'Минимальная длина имени: 2',
            },
          })}
        />
      </label>
      <div>{errors?.namePhoto && <p>{errors?.namePhoto.message}</p>}</div>
      <label>
        Ссылка на фото
        <input
          type="text"
          placeholder="https://api.unsplash.com/photos/KR2mdHJ5qMg"
          {...register('linkPhoto', {
            required: 'Ссылка не указана',
            pattern: {
              value:
                /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
              message: 'Формат ссылки некорректный',
            },
          })}
        />
      </label>
      <div>{errors?.linkPhoto && <p>{errors?.linkPhoto.message}</p>}</div>
      <button>Добавить фото</button>
    </form>
  );
};
