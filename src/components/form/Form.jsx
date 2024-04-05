import React, { useState } from 'react'
import Container from '../container/Container'
import Frame from '../image-frame/Frame'
import Input from '../Input'

function Form({className}) {

  const [imgValue, setImgValue] = useState({
    width: "900",
    height: "500",
    topic: "nature",
  })

  const [link, setLink] = useState('https://source.unsplash.com/900x500/?nature')

  function imgUpadatedValue(v) {
    setLink(v + ",")
    console.log(link)
  }

  return (
    <Container className={className}>

      <form onSubmit={(e) => {
        e.preventDefault()
        setLink(`https://source.unsplash.com/${imgValue.width}x${imgValue.height}/?${imgValue.topic}`);
      }}>
        <div className='flex flex-row gap-2 justify-center mb-3'>

          <Input 
            label='Image Width'
            id='img-width'
            type='number'
            placeholder='Enter in px'
            onChangeFn={(e) => setImgValue({...imgValue, width: e.target.value})}
          />


          <Input 
            label='Image Height'
            id='img-height'
            type='number'
            placeholder='Enter in px'
            onChangeFn={(e) => setImgValue({...imgValue, height: e.target.value})}
          />

          <Input 
            label='Image Height'
            id='img-topic'
            type='text'
            placeholder='ie: Tech, Nature'
            onChangeFn={(e) => setImgValue({...imgValue, topic: e.target.value})}
          />

          <button 
            type='submit' 
            className='px-5 py-2 rounded-sm bg-gray-700'
          >Get Image</button>
        </div>
      </form>

      <Frame imgLink={link} genetareImgLink={imgUpadatedValue}/>
    </Container>
  )
}

export default Form