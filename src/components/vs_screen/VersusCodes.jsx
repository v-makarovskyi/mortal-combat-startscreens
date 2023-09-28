import React, { useState, useEffect, useRef, useCallback } from 'react'
import { versusCodesSymbols } from '../../data'

const accessKeys = ['q', 'w', 'e', 'r', 't', 'y']

export default function VersusCodes() {
    const [selectedSymbol, setSelectedSymbol] = useState(
        accessKeys.map((item) => ({ id: item, symbolIdx: 0 }))
    )
   const codesPopupRef = useRef(null)

   const keyDownHandler = () => {}

   useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    return () => document.removeEventListener('keydown', keyDownHandler)
   }, [keyDownHandler])

  return (
    <div>VersusCodes</div>
  )
}
