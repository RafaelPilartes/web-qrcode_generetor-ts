import { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Icons

// Styled
import { InputSearchContainer } from './styles'

type InputSearchType = {
  placeholder: string
  valueInput: string
  buttonVisible: boolean
  onClick?: () => void
  onChangeInput?: (e: any) => void
  onkeyUpInput?: (e: KeyboardEvent) => void
}

function InputSearch({
  placeholder,
  valueInput,
  buttonVisible,
  onClick,
  onkeyUpInput,
  onChangeInput
}: InputSearchType) {
  return (
    <InputSearchContainer>
      <input
        type="text"
        value={valueInput}
        placeholder={placeholder}
        onChange={onChangeInput}
        onKeyUp={onkeyUpInput}
      />
    </InputSearchContainer>
  )
}

export default InputSearch
