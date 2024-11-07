import React, { useContext } from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FiHome } from 'react-icons/fi'
import { LuLayoutGrid } from 'react-icons/lu'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import promo from '../assets/images/promotion.gif'
import home from '../assets/images/home.png'
import user from '../assets/images/user.png'
import heart from '../assets/images/fav.png'
import games from '../assets/images/games.png'
import { Link } from 'react-router-dom'
import { LanguageContext } from '../contexts/LanguageContext'

const Footer = () => {
  const { content } = useContext(LanguageContext);
    const menus=[
        {name:content?.nav?.home,link:'/',img:home,},
        {name: content?.nav?.browse,link:'/browser',img:games},
        {name: content?.nav?.promotion,link:'/promotion',img:promo},
        {name: content?.nav?.account,link:'/account',img:user},
        {name: content?.nav?.contact,link:'/contact',img:heart},
    ]
  return (
    <div className='footer gradientBg cursor-pointer py-2 px-2 px-sm-3'>
      <div className="row ">
        {menus.map((menu,index)=>{
            return  <Link to={menu.link} className='text-center footerCol px-1 px-sm-0' key={index} >
            <img src={menu.img} className={`${index===2 ? 'promoFooter' : 'footerImg' }`} />
           <p className='mt-2'>{menu.name}</p>
       </Link>
           
        })}
      </div>
    </div>
  )
}

export default Footer
