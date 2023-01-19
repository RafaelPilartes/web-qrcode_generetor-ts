import styled from 'styled-components'

export const HomeContainer = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes searchAnim {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(6px, -6px);
    }

    40% {
      transform: translate(6px, 6px);
    }

    60% {
      transform: translate(-6px, 6px);
    }

    80% {
      transform: translate(-6px, -6px);
    }

    100% {
      transform: translate(0);
    }
  }

  .container {
    width: 100%;
    max-width: 76rem;
    margin: 1rem;

    display: flex;
    justify-content: space-between;
    flex-direction: row;

    padding: 2rem 0;

    display: flex;

    .containerLeft {
      width: 100%;
      max-width: 52rem;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.8rem;

      padding: 0.6rem 1.2rem;

      .title {
        font-size: 1.4rem;
        font-weight: 800;
        text-align: center;
        color: ${({ theme }) => theme.colors['base-black']};
        padding: 1rem 0rem;
        align-self: flex-start;
      }

      .containerShadow {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        padding: 30px 40px;
        box-shadow: rgba(12, 37, 54, 0.15) 0px 1px 15px;
        border-radius: 10px;
      }

      .containerOptionQrCode {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 0.8rem;

        padding: 0.8rem 0rem;

        label {
          font-size: 1.01rem;
          font-weight: 600;
          color: ${({ theme }) => theme.colors['base-black']};
        }

        input {
          width: 100%;
          font-size: 0.96rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['brand-primary']};

          padding: 1rem;
          background-color: ${({ theme }) => theme.colors['base-white']};
          border: 0.01rem solid
            ${({ theme }) => theme.colors['brand-primary-light-opacity']};
          border-radius: 0.4rem;
        }

        select {
          width: 100%;
          height: 2.4rem;
          font-size: 0.96rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['brand-primary']};

          padding: 0;
          background-color: ${({ theme }) => theme.colors['base-white']};
          border: 0.01rem solid
            ${({ theme }) => theme.colors['brand-primary-light-opacity']};
          border-radius: 0.4rem;
        }
      }

      .containerOptionsColor {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 2rem;

        .inputColor {
          width: 100%;
          height: 2.4rem;
          font-size: 0.96rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['brand-primary']};

          padding: 0;
          background-color: ${({ theme }) => theme.colors['base-white']};
          border: none;
          border-radius: 0.4rem;
        }
      }
    }

    .containerRight {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 0.8rem 1rem;

      .containerShadow {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 1.4rem 0;
        padding: 0.2rem 0.6rem;
        box-shadow: rgba(12, 37, 54, 0.15) 0px 1px 15px;
        border-radius: 10px;
      }

      .containerOptionQrCode {
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        padding: 0.8rem 0rem;

        label {
          font-size: 1.01rem;
          font-weight: 600;
          color: ${({ theme }) => theme.colors['base-black']};
        }

        input {
          width: 100%;
          font-size: 0.96rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['brand-primary']};

          padding: 1rem;
          background-color: ${({ theme }) => theme.colors['base-white']};
          border: 0.01rem solid
            ${({ theme }) => theme.colors['brand-primary-light-opacity']};
          border-radius: 0.4rem;
        }
      }

      .containerRow {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 1rem;

        span {
          font-size: 0.9rem;
          font-weight: 400;
        }
        b {
          font-size: 0.9rem;
        }
      }

      .downloadQrCode,
      .saveQrCode {
        width: 100%;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: center;
        color: ${({ theme }) => theme.colors['base-black']};
        padding: 0.9rem;

        border: none;
        border-radius: 0.4rem;

        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        color: ${({ theme }) => theme.colors['base-white']};
      }
      .saveQrCode {
        background-color: ${({ theme }) => theme.colors['brand-secondary']};
      }
    }

    .illustrationImg {
      animation: searchAnim 4s ease 0s infinite alternate none;
    }
  }
`
