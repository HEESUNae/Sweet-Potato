import styled from 'styled-components';

export const StyledLoginPage = styled.div`
  background: #6c5f5b;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .login-container {
    background-color: #4f4a45;
    border-radius: 100% 0;
    padding: 2rem;
    width: 30rem;
    text-align: center;
    .desc {
      color: #e0e0e0;
      margin: 1.6rem 0 1rem;
    }

    input {
      margin-top: 1rem;
    }
    button {
      margin-top: 1.6rem;
    }
    .join-btn {
      margin-top: 1.8rem;
      border-top: 0.1rem solid rgba(255, 255, 255, 0.3);
      button {
        color: #fff;
        display: inline-block;
        font-size: 1.5rem;
      }
    }
  }
`;
