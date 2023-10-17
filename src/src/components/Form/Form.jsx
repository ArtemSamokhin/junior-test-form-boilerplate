import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { ActionButton } from '../ActionButton/ActionButton';
import { TextInput } from '../TextInput';
import { CheckBox } from '../CheckBox';
import { TextArea } from '../TextArea';

import { DescriptionContainer, FormContainer, InputsContainer } from './styles';

// const DEFAULT_VALUES = {
//   label: 'label',
//   description: 'description',
// };

export const Form = ({ onSubmit }) => {
  const [withDescription, setWithDescription] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset(<CheckBox />);
  };

  return (
    <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <InputsContainer>
        <TextInput
          name="Название фото"
          placeholder="National Park"
          register={register('label', {
            required: 'Введите название фотографии',
          })}
          errors={errors.label?.message}
        />
        <TextInput
          name="Ссылка"
          placeholder="data:image/jpeg;base64,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"
          register={register('urls.small', {
            required: 'Вставьте ссылку на изображение',
          })}
          errors={errors.urls?.small.message}
        />
        <DescriptionContainer>
          <CheckBox
            CheckBoxChecked={withDescription}
            CheckBoxChanged={() => {
              setWithDescription((prevState) => !prevState);
              console.log(withDescription);
            }}
          ></CheckBox>
          {withDescription && (
            <TextArea
              placeholder="Введите описание изображения"
              register={register('description', {
                required: 'Заполните описание фотографии',
              })}
              errors={errors.description?.message}
            >
              Введите описание изображения
            </TextArea>
          )}
        </DescriptionContainer>
      </InputsContainer>
      <ActionButton type="submit" />
    </FormContainer>
  );
};
