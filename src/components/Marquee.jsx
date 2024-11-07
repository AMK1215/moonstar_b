import React from 'react'
import { AiOutlineSound } from 'react-icons/ai'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'
 
const Marquee = () => {
  const {data: bannerText} = useFetch(BASE_URL + "/bannerText");
  // console.log(bannerText);
  
  return (
    <div className="d-flex align-items-center gap-2 btn2 py-1 px-2">
        <AiOutlineSound size={22} />
        <marquee  direction="left">
            <small>{bannerText && bannerText.text}</small>
        </marquee>
    </div>
  )
}

export default Marquee
