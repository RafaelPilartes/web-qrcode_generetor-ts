import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  /* filter: blur(8px);
  -webkit-filter: blur(8px); */
  background-color: rgb(255, 255, 255);

  border-bottom: 0.01rem solid
    ${({ theme }) => theme.colors['brand-primary-light-opacity']};

  .container {
    width: 100%;
    max-width: 76rem;
    margin: 1rem;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  img {
    width: 18rem;
    cursor: pointer;
  }

  .btnMyQr {
    color: ${({ theme }) => theme.colors['base-white']};
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors['brand-primary-light']};

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    gap: 0.6rem;

    padding: 0.8rem 1rem;
    border-radius: 0.6rem;
    border: 0.01rem solid
      ${({ theme }) => theme.colors['brand-primary-light-opacity']};
  }
`
