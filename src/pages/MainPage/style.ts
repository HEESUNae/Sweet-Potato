import styled, { css } from 'styled-components';

export const StyledMainPage = styled.div<{ $loading: boolean }>`
  background-size: cover;
  .visual {
    display: grid;
    grid-template-rows: 86px 1fr;
    height: calc(100vh - 55px);
  }
  .user-info {
    padding: 2rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .user-welcome {
      p {
        font-size: 2rem;
        margin-top: 0.5rem;
        span {
          font-size: 1em;
          font-weight: 600;
        }
      }
    }
    button {
      width: auto;
      padding: 0 2rem;
    }
  }
  .list-container {
    padding: 0 2rem;
    ${(props) =>
      props.$loading &&
      css`
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
  }
  .card-container {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 1.6rem;
  }
`;
