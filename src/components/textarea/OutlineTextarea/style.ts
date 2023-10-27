import styled from 'styled-components';

export const StyledOutlineTextarea = styled.textarea`
  resize: none;
  background-color: transparent;
  border: 1px solid #fff;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-size: 1.8rem;
  height: 100%;
  box-sizing: border-box;
  text-align: center;
  &::placeholder {
    color: #eee;
    text-align: center;
    height: auto;
  }
`;
