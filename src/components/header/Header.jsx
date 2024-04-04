import React from 'react'
import Input from '../Input'
import Container from '../container/Container'
import ThemeBtn from './ThemeBtn'

function Header({className}) {
  return (
    <Container className={className}>
      <div className='flex flex-row justify-between py-7'>
        <div>
          Random Image
        </div>
        <div>
          <ThemeBtn />
        </div>
      </div>
    </Container>
  )
}

export default Header