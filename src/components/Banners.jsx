import React from 'react'
import { Carousel } from 'react-bootstrap'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'

const Banners = () => {
  const {data: banners} = useFetch(BASE_URL + "/banner");
  // console.log(banners);
  
  return (
    <div>
       <Carousel>
        {banners && banners.map((banner,index)=>{
            return  <Carousel.Item key={index} > 
                <img src={banner.img_url} className='img-fluid' />
            </Carousel.Item>
        })}
      </Carousel>
    </div>
  )
}

export default Banners
