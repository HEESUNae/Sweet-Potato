import styled from 'styled-components';

export const StyledPrimaryCheckbox = styled.div`
  input[type='checkbox'] {
    display: none;
    & + label {
      background-color: #eee;
      display: inline-block;
      padding: 1rem;
      cursor: pointer;
      border-radius: 0.4rem;
    }
    &:checked + label {
      background-color: #f4ce14;
    }
  }
`;
