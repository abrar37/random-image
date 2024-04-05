import Container from '../container/Container'


function Frame(props) {

  function changeImg () {
    props.genetareImgLink(props.imgLink)
  }
  
  return (
    <Container className={props.className}>
      <div className='flex flex-row justify-center'>
          <div className='gap-2 bg-gray-500 p-5 rounded-sm relative'>
              <button 
                onClick={changeImg}
                className='absolute right-10 top-10 px-5 py-2 rounded-sm bg-black text-s'
              > Change image </button>

              <img src={props.imgLink} />
          </div>
      </div>
    </Container>
    
  )
}

export default Frame