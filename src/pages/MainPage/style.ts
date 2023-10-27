import styled from 'styled-components';

export const StyledMainPage = styled.div`
  background-size: cover;
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
  }
  .card-container {
    padding: 2rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 1.6rem;
  }
`;
