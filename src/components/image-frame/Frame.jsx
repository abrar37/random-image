import { useEffect, useState } from 'react';
import Container from '../container/Container'


function Frame(props) {
  
  console.log(props.genetareImgLink)

  // const [imgLink, setImgLink] = useState(props.imgLink)

  const changeImg = () => {
    props.genetareImgLink(props.imgLink)
    console.log("Hello")
  }

  // const [count, setCount] = useState(0)
  // useEffect( ()=> {
  //   <Img src={props.imgLink} />
  // }, [count])
  

  return (
    <Container className={props.className}>
      <div className='flex flex-row justify-center'>
          <div className='gap-2 bg-gray-500 p-5 rounded-sm relative'>
            <button 
              onClick={changeImg}
              className='absolute right-10 top-10 px-5 py-2 rounded-sm bg-black text-s'
            > Change image </button>

            {/* <button 
              onClick={() => (setCount(count + 1))}
              className='absolute right-10 top-10 px-5 py-2 rounded-sm bg-black text-s'
            >Change image</button> */}

            {/* <Img src={props.imgLink} /> */}
            <img src={props.imgLink} />
          </div>
      </div>
    </Container>
    
  )
}

export default Frame