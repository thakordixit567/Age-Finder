import React, { useRef, useState } from 'react'
import './ImageGenrator.css'
import dixit from '../Assests/default_image.svg'
const ImageGenrator = () => {
      const [image_url, set_url] = useState("/");
      let inputRef = useRef(null);

      const imageGenrator = async () => {
                 if (inputRef.current.value==="") {
                     return 0;
                 }
                 const response = await fetch(
                  "https://api.openai.com/v1/images/variations",
                  {
                    method:"POST",
                    headers:{
                      "Content-Type": "application/json",
                      Authorization:
                      "Bearer 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",
                      "User-Agent":"Chrome",
                    },
                    body:JSON.stringify({
                      prompt:`${inputRef.current.value}`,
                      n:1,
                      size:"512x512",
                    }),
                  }
                 );
                  let data = await response.json();
                  console.log(data)
      }
  return (
    <div className='ai-image-genrator'>
      <div className='header'>Ai Image <span>Genarator</span></div>
      <div className="img-loading">
        <div className="image"><img src={image_url==="/"?dixit:image_url} alt="" /></div>
      </div>
       <div className="serch-box">
        <input type="text" ref={inputRef} className='serch-input' placeholder='Describe What You Want To See ?' />
        <div className="genrate-btn" onClick={()=>{imageGenrator()}}>Generate</div>
       </div>
    </div>
  )
}

export default ImageGenrator
