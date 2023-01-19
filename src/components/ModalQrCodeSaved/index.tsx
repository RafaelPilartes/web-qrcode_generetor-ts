import React, { useContext, useState } from 'react'

// Modal
import Modal from 'react-modal'

// Icons
import { AiFillEye } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { GoDesktopDownload } from 'react-icons/go'
import { ImListNumbered } from 'react-icons/im'

// Styles
import { ModalContainer, ButtonAction } from './styles'

// Components
import BaseBtn from '../BaseBtn'
import { QrCodeContext } from '../../context/QrCodeContext'

type modalType = {
  ModalQrCodeSavedIsOpen: boolean
  setModalQrCodeSavedIsOpen: (e: boolean) => void
}

const customStyles = {
  overlay: {
    backgroundColor: '#00000069',
    zIndex: 10
  },
  content: {
    width: '70%',
    height: '65%',
    backgroundColor: 'transparent',
    padding: 0,
    borderWidth: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

const ModalQrCodeSaved: React.FC<modalType> = ({
  ModalQrCodeSavedIsOpen,
  setModalQrCodeSavedIsOpen
}): JSX.Element => {
  const { qrCodeItems, removeItemQrCode } = useContext(QrCodeContext)

  const listQrCodesList = qrCodeItems.map((item, index) => (
    <>
      <tr key={index}>
        <td>
          <p># {item._id} </p>
        </td>

        <td className="diplay">
          <img width={28} src={item.photo_QrCode} alt="" />
        </td>

        <td>
          <p> {item.name_QrCode} </p>
        </td>

        <td>
          <p> {item.url_QrCode} </p>
        </td>

        <td>
          <p> {item.date_QrCode} </p>
        </td>

        <td className="diplaySpace">
          <ButtonAction
            href={item.photo_QrCode}
            download={'QrCode.png'}
            color={'#0eb839'}
          >
            <GoDesktopDownload size={24} className="iconEdit" />
          </ButtonAction>

          <ButtonAction
            onClick={() => deleteQrCode(item._id)}
            color={'#b80e19'}
          >
            <MdDelete size={24} className="iconDelete" />
          </ButtonAction>
        </td>
      </tr>
    </>
  ))

  function closeModal() {
    setModalQrCodeSavedIsOpen(false)
  }

  function deleteQrCode(QrCode: number) {
    removeItemQrCode(QrCode)
  }
  return (
    <Modal
      isOpen={ModalQrCodeSavedIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContainer>
        <div className="tableContainer">
          <h1 className="titleTable">Lista dos seu QrCodes</h1>

          <table>
            <thead>
              <tr>
                <td>
                  <ImListNumbered /> Id
                </td>
                <td>QrCode</td>
                <td>Nome do QrCode</td>
                <td>
                  <div className="headTable">Url do QrCode</div>
                </td>
                <td>
                  <div className="headTable">Data</div>
                </td>
                <td className="diplaySpace"></td>
              </tr>
            </thead>
            <tbody>{listQrCodesList}</tbody>
          </table>

          <div className="containerEmpty">
            {listQrCodesList.length <= 0 && (
              <>
                <img src="/emptyQrCode.png" alt="" />
                <h3>Não tem nenhum QrCode salvo...😥</h3>
              </>
            )}
          </div>
        </div>
      </ModalContainer>
    </Modal>
  )
}

export default ModalQrCodeSaved
