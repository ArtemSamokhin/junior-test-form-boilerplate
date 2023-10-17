import { CheckBoxContainer, CheckBoxLabel } from './style';

export const CheckBox = ({
  textCheckBox,
  CheckBoxChecked,
  CheckBoxChanged,
}) => {
  return (
    <CheckBoxContainer>
      <CheckBoxLabel checked={CheckBoxChecked} onChange={CheckBoxChanged}>
        <input type="checkbox" />
        <span>{textCheckBox}</span>
        <p>Добавить описание изображения?</p>
      </CheckBoxLabel>
    </CheckBoxContainer>
  );
};
