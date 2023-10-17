import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 400px;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TextContainer = styled.div`
  max-width: 300px;
`;

export const ImageLabel = styled.h4`
  margin-bottom: 10px;
  margin-top: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  word-break: break-word;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DateCreated = styled.p`
  margin: 10px 0;
`;

export const DeleteBtn = styled.button`
  flex-shrink: 0;
  margin-left: auto;
  margin-right: 0;
  width: 30px;
  height: 30px;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAZlBMVEX///8AAAD19fV9fX3h4eFOTk75+fmdnZ2/v784ODgtLS1aWlrQ0NDy8vL8/Px6enpJSUmjo6Pa2trr6+sKCgpubm7Hx8czMzOvr69fX18RERGpqak/Pz8kJCQeHh6SkpKIiIgYGBhz4VkAAAADbElEQVRoge2b67qqIBCGxYW2Mk9pWmaW3f9NbovBM+IB3M/ez3z/EuRFzjMNhrFabh48LuTyCHJ3fSFr5Z0L0qjIvX3x+ZV0db3tSDdPZKjM3AtP3yP4qhPiffDRcxRPiEP3wHuPFjG0Qqf5Ge7RBUmNS9LYNuw4bZ4E+vEpZ1lNa9OQP9S/EvBp/9N5GvBpqBv/O4pvKqC7AaCvQ7v33H6M10uxPPjMdJAC4+Kpdwq4MPb8QYoNY1DvGnBmkMNI0oElKdkHfJonpxFlsO08smESDIDrMKlScqPDJhPqNra/bNXpdybd7e+tqnScNTlfmugfjY2bnn404gkp/+bXfyRpgVRewkZNjgH/zrNlN2qrE71lvOBiig/LC3kP19etSt9Q9tQCBZ9fRMrxzbFtYouOoIpzV4plukHp4mMqLOGZFrxhwBg4CzPAIUJ95zPB2aUUpfsnWQNtU8yKT0TptvVNf2rjsylwEu2EnK/LlvTYDLD6ZzcuP9ul/TPhSSCYsURuEBzexEbKQZZhm+DzxFsQVPCi5wxJ5TsQ5HBEI2SLTG45TeSBDiBH9UOQcjt56gTgcdP+XlJP4f7r0fICJReTBkpOahWWOrV8VRL7ICB6VUq6yU7kZWxQIh3Zvs4WCOYYQfldXtAqvfMZ9Erx6yIvbLEur/mTumSvFI4KweAvZ9NrIyiyze2y4VS5xDMCfDX7AEU+8pGPfOQjH/nIR/5KvjswnWk6qOMgkyp+9LELur65j7HUdWd9XAjPrvtUEd9jf4u0zVdmrrcNavP75NjxYCnig2u+Zb+Cv6ztzwIfa6cLFPHBe9n6WpO1yLHVJODA6DiQ9fGPyEc+8pGPfOQjH/nIRz7ykY985CMf+chH/v/Ch+Cotv+PhdyH+/j/PBZA1A4gYeGy7XhK+/vkqsP/adCquR13kK9brlvV8tF7TxHfMKOoH5pIo77/24uiXozNP+j/h/gTNWHIEP9RLngFppE4UneJJu6MiARz3VLCt0bWBInY3whqArH5jalFF4P4hbLtcYgQ9ErCRW/xSm8egi5Z15T1jbrAjRfc3OnIj906mm/pUKrrXa2m4cqox7B1kWdxTPGBqNSSyQdSGYe4KqJZ3VWc1xp8NQnUXMS6rl5FvIPoqu98PQ9bwvn99JU5cohATvZKJZP3DwXBPUZxol38AAAAAElFTkSuQmCC');
  background-size: cover;
  border: none;
  cursor: pointer;
`;

export const ImageUrl = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

export const ImageDescription = styled.p`
  word-break: break-all;
`;
