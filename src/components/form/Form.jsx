import React, { useState } from 'react'
import Container from '../container/Container'
import Frame from '../image-frame/Frame'

function Form({className}) {

  const [imgValue, setImgValue] = useState({
    width: "900",
    height: "500",
    topic: "nature",
  })

  const [link, setLink] = useState('https://source.unsplash.com/900x500/?nature')

  function genetareImgLink(){
    setLink(`https://source.unsplash.com/${imgValue.width}x${imgValue.height}/?${imgValue.topic}`);
  }

  return (
    <Container className={className}>

      <form onSubmit={(e) => {
        e.preventDefault()
        genetareImgLink()
      }}>
        <div className='flex flex-row gap-2 justify-center mb-3'>

          <div className='form-field'>
            <label htmlFor='img-width'>Image Width</label>
            <input type='number' id="img-width" placeholder='Enter in px' min="200"
              onChange={(e) => setImgValue({...imgValue, width: e.target.value})} />
          </div>

          <div className='form-field'>
            <label htmlFor='img-height'>Image Height</label>
            <input type='number' id="img-height" placeholder='Enter in px' min="200" 
              onChange={(e) => setImgValue({...imgValue, height: e.target.value})} />
          </div>

          <div className='form-field'>
            <label htmlFor='img-topic'>Image Topic</label>
            <input type='text' id='img-topic' placeholder='ie: Tech, Nature'
              onChange={(e) => setImgValue({...imgValue, topic: e.target.value})} />
          </div>

          <button 
            type='submit' 
            className='px-5 py-2 rounded-sm bg-gray-700'
          >Get Image</button>
        </div>
      </form>

      <Frame imgLink={link}/>
    </Container>
  )
}

export default Form