import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputName = styled.h5`
  margin: 0;
  color: #6262ff;
`;

export const Inputes = styled.input`
  padding: 5px;
  border: 1px solid gray;
  border-radius: 5px;
  color: gray;

  &:focus {
    border: 1px solid #ffa996;
    color: #ffa996;
  }
`;

export const Validation = styled.p`
  color: red;
`;
