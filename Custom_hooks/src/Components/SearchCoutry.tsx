import { useDebouncedCallback } from '@react-hookz/web'
import React, { useState } from 'react'
import InputBox from './InputBox'

const SearchCoutry = () => {
    const [value,setValue] = useState<string>("")

  
  const onChangeDebounced = useDebouncedCallback(
    (e)=>setValue(e.target.value),
    [],
    1000,
    0
  )
  return (
    <div>
          <InputBox label='value' value={value} onChange={onChangeDebounced} />
    </div>
  )
}

export default SearchCoutry