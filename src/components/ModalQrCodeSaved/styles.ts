import styled from 'styled-components'

export const Container = styled.div`
  width: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors['base-background']};
`
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  background-color: ${props => props.theme.colors['base-background']};

  .tableContainer {
    width: 100%;
    max-height: 70vh;
    overflow: auto;

    .titleTable {
      font-size: 1.6rem;
      font-weight: 800;
      text-align: center;
      color: ${({ theme }) => theme.colors['base-black']};
      padding: 1.2rem 1rem;
      align-self: flex-start;
    }

    .containerEmpty {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .emptyQrCode {
      align-self: center;
    }

    table {
      width: 100%;
      min-width: 60rem;
      font-family: 'Roboto', sans-serif;
      border-collapse: collapse;

      /* linha */
      tr {
        padding: 8px;
        border-bottom: 1px solid #dddddd;
      }

      /* coluna header */
      thead {
        height: 2.6rem;
        background-color: #f1f1f1;

        .headTable {
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 0.3rem;
        }
      }

      /* coluna body */
      tbody {
        tr {
          transition: 0.2s ease;
          :hover {
            background-color: ${({ theme }) =>
              theme.colors['brand-primary-light-opacity']};
          }
        }
      }
      td {
        padding: 6px 14px 6px 16px;
      }

      td.diplaySpace {
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      td.diplay {
        display: flex;
        align-items: center;
      }
      td p {
        text-overflow: ellipsis;
        overflow: hidden;
        max-width: 24rem;
        height: 1.2em;
        white-space: nowrap;
      }
    }

    /* width */
    ::-webkit-scrollbar {
      width: 0.4rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`
export const ButtonAction = styled.a`
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;
  color: #6c6a72;

  border: none;
  background-color: transparent;
  transition: 0.4s ease;

  :hover {
    color: #fff;
    background-color: ${props => props.color};
  }
`
