import { ImageItem } from '../ImageItem';

import { ImageLi, ImageListStyle, ImageListWrapper } from './styles';

export const ImageList = ({ photos, onDeleteItem }) => {
  return (
    <ImageListWrapper>
      <ImageListStyle>
        {photos.map((photo) => (
          <ImageLi key={photo.id}>
            <ImageItem photo={photo} onDelete={() => onDeleteItem(photo.id)} />
          </ImageLi>
        ))}
      </ImageListStyle>
    </ImageListWrapper>
  );
};
