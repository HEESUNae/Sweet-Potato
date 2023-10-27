import styled from 'styled-components';

export const StyledPrimaryBtn = styled.button<{ $bgcolor?: string }>`
  background-color: ${(props) => props.$bgcolor ?? '#ED7D31'};
  color: #fff;
  width: 100%;
  height: 4rem;
  border-radius: 0.4rem;
`;
