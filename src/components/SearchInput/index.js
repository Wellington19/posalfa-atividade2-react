import React, { useState } from 'react'
import useDebounce from '../../utils/useDebounce'
import './styles.css'

export default function SearchInput({ value, onChange }) {
  const [displayValue, setDisplayValue] = useState(value)
  const debouncedChange = useDebounce(onChange, 500)

  function handleChange(event) {
    setDisplayValue(event.target.value)
    debouncedChange(event.target.value)
  }

  return (
    <input type="search" placeholder="Digite para buscar" value={displayValue} onChange={handleChange} />
  )
}