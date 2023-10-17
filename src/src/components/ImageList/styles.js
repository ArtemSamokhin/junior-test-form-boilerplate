import styled from 'styled-components';

export const ImageListWrapper = styled.div``;

export const ImageListStyle = styled.ul`
  display: grid;
  margin: 0;
  padding: 0;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

export const ImageLi = styled.li`
  list-style: none;
  border: 1px solid gray;
  padding: 15px;
  border-radius: 10px;
`;
