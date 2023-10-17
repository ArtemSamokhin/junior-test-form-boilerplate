import { InputContainer, InputName, Inputes, Validation } from './styles';

export const TextInput = ({ name, placeholder, register, errors }) => {
  return (
    <InputContainer>
      <InputName>{name}</InputName>
      <Inputes placeholder={placeholder} {...register} />
      <Validation>{errors}</Validation>
    </InputContainer>
  );
};
