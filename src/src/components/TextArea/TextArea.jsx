import { Validation } from '../TextInput/styles';

import { TextAreaContainer } from './style';

export const TextArea = ({ placeholder, register, errors }) => {
  return (
    <TextAreaContainer>
      <textarea placeholder={placeholder} {...register} />
      <Validation>{errors}</Validation>
    </TextAreaContainer>
  );
};
