import styled from 'styled-components';

export const StyledJoinPage = styled.div`
  background: #6c5f5b;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .join-container {
    background-color: #4f4a45;
    border-radius: 100% 0;
    padding: 2rem;
    width: 30rem;
    text-align: center;
    h2 {
      color: #eee;

      margin-bottom: 1.6rem;
    }
    .input-wrap {
      display: grid;
      gap: 1rem;
      input {
        flex: 2;
      }
      .join-id-check-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        .join-id-check-btn {
          background-color: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.2);
          flex: 1;
          height: 3.6rem;
          &.active {
            background-color: black;
          }
        }
      }
    }
  }
`;
