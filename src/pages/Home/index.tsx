import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'

// QrCode
import QRCodeLink from 'qrcode'

// Toast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Styles
import { HomeContainer } from './styles'

// Components
import BaseBtn from '../../components/BaseBtn'

import { defaultTheme } from '../../themes/default'
import InputTxt from '../../components/InputTxt'
import QRCode from 'react-qr-code'
import { QrCodeContext } from '../../context/QrCodeContext'

function Home() {
  const { addQrCode } = useContext(QrCodeContext)
  const [link, setLink] = useState<string>('')
  const [nameQrCode, setNameQrCode] = useState<string>('')
  const [qrcodelink, setQrcodeLink] = useState<string>('')
  const [size, setSize] = useState<any>(300)
  const [background, setBackground] = useState<string>('#ffffff')
  const [foreground, setForeground] = useState<string>('#000000')
  const [errorLevel, setErrorLevel] = useState<string>('L')

  const dataNow = 'new Data'

  const notifyWarn = (warn: string) => {
    toast.warn(warn, {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  const notifySuccess = (success: string) => {
    toast.success(success, {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  function clearAll() {
    setLink('')
    setNameQrCode('')
    setQrcodeLink('')
    setSize(300)
    setBackground('#ffffff')
    setForeground('#000000')
    setErrorLevel('L')
  }

  function handleGenerator(
    link: string,
    darkBackground?: string,
    lightForeground?: string,
    correctionErrorLevel?: QRCodeLink.QRCodeErrorCorrectionLevel
  ) {
    QRCodeLink.toDataURL(
      link,
      {
        width: size,
        errorCorrectionLevel: correctionErrorLevel,
        type: 'image/png',
        margin: 1,
        color: {
          dark: darkBackground,
          light: lightForeground
        }
      },
      function (err, url) {
        setQrcodeLink(url)
      }
    )
  }
  function handleDownload() {
    if (link == '') {
      notifyWarn('Digite um URL')
      return null
    }
  }
  function handleSave() {
    if (nameQrCode == '') {
      notifyWarn('Dé um nome ao seu QrCode')
    } else if (link == '') {
      notifyWarn('Digite um URL')
    } else {
      const qrCodeItem = {
        _id: 1,
        photo_QrCode: qrcodelink,
        name_QrCode: nameQrCode,
        url_QrCode: link,
        date_QrCode: dataNow
      }

      addQrCode(qrCodeItem)

      notifySuccess('Url salvo com sucesso!🥳✅')
      clearAll()
    }
  }
  function changeName(value: string) {
    setNameQrCode(value)
    handleGenerator(value)
  }
  function changeLink(value: string) {
    setLink(value)
    handleGenerator(value)
  }
  function changeSize(value: number) {
    setSize(value)
  }
  function changeBackground(darkBackground: string) {
    setBackground(darkBackground)
    handleGenerator(link, darkBackground, foreground)
  }
  function changeForeground(lightForeground: string) {
    setForeground(lightForeground)
    handleGenerator(link, background, lightForeground)
  }
  function changeErrorLevel(correctionErrorLevel: any) {
    console.log(correctionErrorLevel)

    setErrorLevel(correctionErrorLevel)
    handleGenerator(link, background, foreground, correctionErrorLevel)
  }

  useEffect(() => {}, [])

  return (
    <HomeContainer>
      <ToastContainer />

      <div className="container">
        <div className="containerLeft">
          <h1 className="title">Adicione conteúdo ao código QR do URL </h1>

          <div className="containerShadow">
            <div className="containerOptionQrCode">
              <label>Dê um nome ao seu código QR *</label>
              <input
                placeholder="Digite a URL"
                value={nameQrCode}
                onChange={e => changeName(e.target.value)}
              />
            </div>
          </div>

          <div className="containerShadow">
            <div className="containerOptionQrCode">
              <label>URL do site *</label>
              <input
                placeholder="Digite a URL"
                value={link}
                onChange={e => changeLink(e.target.value)}
              />
            </div>
          </div>

          <div className="containerShadow">
            <div className="containerOptionsColor">
              <div className="containerOptionQrCode">
                <label>Cor de fundo:</label>
                <input
                  className="inputColor"
                  type="color"
                  value={background}
                  onChange={e => changeBackground(e.target.value)}
                />
              </div>

              <div className="containerOptionQrCode">
                <label>Cor do primeiro plano:</label>
                <input
                  className="inputColor"
                  type="color"
                  value={foreground}
                  onChange={e => changeForeground(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="containerShadow">
            <div className="containerOptionQrCode">
              <label>Nível de erro:</label>
              <select onChange={e => changeErrorLevel(e.target.value)}>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="Q">Q</option>
                <option value="H">H</option>
              </select>
            </div>
          </div>
        </div>

        <div className="containerRight">
          <QRCode
            value={link}
            size={300}
            bgColor={background}
            fgColor={foreground}
            level={errorLevel}
          />

          <div className="containerShadow">
            <div className="containerOptionQrCode">
              <label>Tamanho(px):</label>
              <input
                type="range"
                min="200"
                max="2000"
                onChange={e => changeSize(Number(e.target.value))}
              />
              <div className="containerRow">
                <span>Baixa qualidade</span>
                <b>
                  {size} x {size} Px
                </b>
                <span>Alta qualidade</span>
              </div>
            </div>
          </div>

          <div className="containerRow">
            <a
              className="downloadQrCode"
              onClick={handleDownload}
              href={qrcodelink}
              download={'QrCode.png'}
            >
              Baixar QrCode
            </a>
            <button className="saveQrCode" onClick={handleSave}>
              Guardar QrCode
            </button>
          </div>
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home
