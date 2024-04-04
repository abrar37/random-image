import React, { useState } from 'react'

function Input({lable, type='text', placehold, className}) {

  const [formValue, setFromValue] = useState()

  function chnagedValue(e){
    setFromValue(e.targer.value);
  } 

  return (
    <>
      <lable className='flex flex-col space-y-1'>
          <span>{lable}</span>
          <input 
            className={`${className} px-3 py-2 rounded-sm`} 
            type={type} 
            placeholder={placehold} 
            onChange={chnagedValue}
          />
      </lable>
    </>
  )
}

export default Input