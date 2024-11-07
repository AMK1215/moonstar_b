import React from 'react'
import Banners from '../components/Banners'
import '../assets/css/promotion.css'
import promo from '../assets/images/promo.png';
import { Badge } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import BASE_URL from '../hooks/baseUrl';

const PromotionPage = () => {
  const {data: promotions} = useFetch(BASE_URL + "/promotion");
  // console.log(promotions);
  
  return (
    <div>
      <Banners/>
      <div className="px-3 pt-3 ">
        {promotions && promotions.map((item,index)=>{
            return <div className='mb-4 promotionCard p-3 rounded-4' key={index}>
                <img className='img-fluid rounded-4' src={item.img_url} />
                {/* <small className='d-block mt-2'>ဖရီးဘောနပ် 3,000ကျပ်</small> */}
                {/* <Badge bg="warning" text="dark">
                 <small>အကောင့်ဖွင့်ဘောနပ်</small>
                </Badge>
                <small className="d-block text-secondary">2024.8.20 - 2025.8.20</small> */}
            </div>
        })}
      </div>
    </div>
  )
}

export default PromotionPage
