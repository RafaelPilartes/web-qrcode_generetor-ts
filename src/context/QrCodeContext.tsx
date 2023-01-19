import { createContext, useEffect, useState } from 'react'
import produce from 'immer'

import { IChildren } from '../interfaces/children'
import { qrCodeType } from '../models/types/qrCodeTypes'

interface QrCodeContextType {
  qrCodeItems: qrCodeType[]
  qrCodeItemsQuantity: number
  addQrCode: (qrCode: qrCodeType) => void
  removeItemQrCode: (qrCodeItemId: number) => void
  clearQrCode: () => void
}

const QRCODE_ITEMS_STORAGE_KEY = 'QrGenerator:QrCodeItems'

export const QrCodeContext = createContext({} as QrCodeContextType)

export function QrCodeContextProvider({ children }: IChildren) {
  const [qrCodeItems, setQrCodeItems] = useState<qrCodeType[]>(() => {
    const storageQrCodeItems = localStorage.getItem(QRCODE_ITEMS_STORAGE_KEY)

    if (storageQrCodeItems) {
      return JSON.parse(storageQrCodeItems)
    }

    return []
  })

  const qrCodeItemsQuantity = qrCodeItems.length

  function addQrCode(qrCode: qrCodeType) {
    const newCart = [...qrCodeItems]
    newCart.push(qrCode)

    setQrCodeItems(newCart)
  }

  function removeItemQrCode(qrCodeItemId: number) {
    const newQrCodeList = produce(qrCodeItems, draft => {
      const qrCodeExists = qrCodeItems.findIndex(
        item => item._id === qrCodeItemId
      )

      if (qrCodeExists >= 0) {
        draft.splice(qrCodeExists, 1)
      }
    })

    setQrCodeItems(newQrCodeList)
  }

  function clearQrCode() {
    setQrCodeItems([])
  }

  useEffect(() => {
    localStorage.setItem(QRCODE_ITEMS_STORAGE_KEY, JSON.stringify(qrCodeItems))
  }, [qrCodeItems])

  return (
    <QrCodeContext.Provider
      value={{
        qrCodeItems,
        qrCodeItemsQuantity,
        addQrCode,
        removeItemQrCode,
        clearQrCode
      }}
    >
      {children}
    </QrCodeContext.Provider>
  )
}
