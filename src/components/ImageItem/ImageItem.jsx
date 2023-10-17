import { getDateRest } from '../../utilities';

import {
  DateCreated,
  DeleteBtn,
  ImageContainer,
  ImageDescription,
  ImageLabel,
  ImageUrl,
  TextContainer,
  TopContainer,
} from './styles';

export const ImageItem = ({ photo, onDelete }) => {
  return (
    <ImageContainer>
      <TopContainer>
        <TextContainer>
          {photo.label && <ImageLabel>{photo.label}</ImageLabel>}
          <DateCreated>
            Дата добавления: {getDateRest(photo.created_at)}
          </DateCreated>
          <ImageLabel>{photo.alt_description}</ImageLabel>
        </TextContainer>
        <DeleteBtn type="button" onClick={onDelete}></DeleteBtn>
      </TopContainer>
      <ImageUrl src={photo.urls.small} alt={'text'} />
      <ImageDescription>{photo.description}</ImageDescription>
    </ImageContainer>
  );
};
