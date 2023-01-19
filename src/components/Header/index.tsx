import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// Icons
import { RiSave2Fill } from 'react-icons/ri'

// Styles
import { HeaderContainer } from './styles'

// Images
import QrcodeLogo from '../../assets/logo/QrcodeLogo.svg'
import ModalQrCodeSaved from '../ModalQrCodeSaved'
import { QrCodeContext } from '../../context/QrCodeContext'

function Header() {
  const navigate = useNavigate()
  const [modalQrCodeIsOpen, setModalQrCodeIsOpen] = useState(false)
  const { qrCodeItemsQuantity } = useContext(QrCodeContext)

  function openModalQrCode() {
    setModalQrCodeIsOpen(true)
  }

  return (
    <HeaderContainer>
      <div className="container">
        <img onClick={() => navigate(`/`)} src={QrcodeLogo}></img>

        <button className="btnMyQr" onClick={openModalQrCode}>
          <RiSave2Fill size={22} />
          Meus QrCodes ({qrCodeItemsQuantity})
        </button>
      </div>

      <ModalQrCodeSaved
        ModalQrCodeSavedIsOpen={modalQrCodeIsOpen}
        setModalQrCodeSavedIsOpen={setModalQrCodeIsOpen}
      />
    </HeaderContainer>
  )
}

export default Header
