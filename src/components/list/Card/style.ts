import styled, { css } from 'styled-components';

export const StyledCard = styled.div<{ $writeMode?: boolean; $detailMode?: boolean }>`
  .card {
    aspect-ratio: 10/7;
    position: relative;
    background-attachment: fixed;
    ${(props) =>
      !props.$detailMode &&
      css`
        background-attachment: inherit;
        cursor: pointer;
      `}
    height: 100%;
    width: 100%;
    .mask {
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &-desc {
      padding: 2rem;
      text-align: center;
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      .card-btn-wrap {
        display: flex;
        gap: 1rem;
        margin-top: 3rem;
        button {
          width: 10rem;
        }
      }
    }
    &-info {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1em;
    }
    p {
      font-family: 'omyu_pretty' !important;
      font-size: 1.2em;
      color: #fff;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      &.date {
        font-size: 1em;
        margin-top: 0.8em;
        display: flex;
        gap: 0.5rem;
        img {
          width: 1.2rem;
        }
      }
    }

    ${(props) =>
      props.$writeMode &&
      css`
        .card-textarea-length {
          color: #fff;
          margin-top: 1rem;
          font-size: 1.4rem;
        }
      `}
  }
`;
