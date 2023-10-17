import { SubmitButton } from './styles';

export const ActionButton = ({ type = 'button', click }) => {
  return (
    <SubmitButton type={type} onClick={click}>
      Добавить Фото
    </SubmitButton>
  );
};
