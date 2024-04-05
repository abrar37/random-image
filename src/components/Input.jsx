import React, { useState } from 'react'

function Input({label, id, type, placeholder, onChangeFn}) {


  return (
    <>
      <div className='form-field'>
            <label htmlFor={id}>{label}</label>
            <input 
              type={type}
              id={id} 
              placeholder={placeholder} 
              min='200'
              onChange={onChangeFn} 
            />
      </div>
    </>
  )
}

export default Input