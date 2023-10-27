import styled, { css } from 'styled-components';

export const StyledDetailPage = styled.div<{ $detailMode?: boolean }>`
  ${(props) =>
    props.$detailMode &&
    css`
      .card {
        height: calc(100vh - 5.4rem);
        p {
          display: block !important;
        }
      }
    `}
  .detail-container {
    .detail-inner {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
      .chat-container {
        margin: 3rem;
        .chat-input-wrap {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          button {
            width: 15rem;
          }
        }
        .chat-list-wrap {
          min-height: 63rem;
          background-color: #f0e6e0;
          position: relative;
          .scroll {
            height: calc(100vh - 16.4rem);
            overflow-y: auto;
            &::-webkit-scrollbar {
              width: 0.7rem;
            }
            &::-webkit-scrollbar-track {
              border: 0.1rem solid #ddd;
            }
            &::-webkit-scrollbar-thumb {
              background-color: #4f4a45;
            }
          }
          .default {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;
            text-align: center;
          }
          .chat-list {
            background-color: #fff;
            padding: 1.2rem;
            border-top: 0.1rem solid #eee;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            button {
              width: 5rem;
              height: 3rem;
              font-size: 1.4rem;
            }
            p {
              font-size: 1.6rem;
              font-family: 'omyu_pretty' !important;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    .detail-container {
      .detail-inner {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr)) !important;
        .card {
          height: calc(70vh - 5.4rem);
        }
        .chat-container {
          .chat-list-wrap {
            min-height: auto;
            /* padding: 5rem 0; */
            .scroll {
              height: auto;
              overflow-y: initial;
            }
          }
        }
      }
    }
  }
`;
