import styled from 'styled-components';

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: grid;
  place-items: center;
  box-sizing: border-box;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
