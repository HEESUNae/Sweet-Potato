import styled from 'styled-components';

export const StyledWritePage = styled.div`
  .write-container {
    .card-setting {
      display: grid;
      gap: 3%;
      grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
      padding: 3rem 0;
      .photo-container {
        background-color: #fff;
        padding: 2rem;
        display: inline-block;
        h3 {
          margin-bottom: 1.3rem;
        }
        .photo-wrap {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin: 1.6rem 0;
          .photo {
            aspect-ratio: 1/1;
            width: 100%;
            overflow: hidden;
            cursor: pointer;
            &.active {
              position: relative;
              &::after {
                content: '선택';
                color: #fff;
                background: rgba(237, 125, 49, 0.8);
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
      }
    }
    .card-btn-wrap {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin: 3rem 0;
      button {
        display: inline-block;
        width: 12rem;
      }
    }
  }
`;
