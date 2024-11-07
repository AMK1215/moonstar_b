import React, { useContext } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import viber from '../assets/images/viber.png'
 import tele from '../assets/images/tele.png'
import fb from '../assets/images/fb.png'
import toast from 'react-hot-toast'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'
import { LanguageContext } from '../contexts/LanguageContext'

const ContactPage = () => {
  const {data: info} = useFetch(BASE_URL + '/contact');
  const { content } = useContext(LanguageContext)
  // console.log(info);
  
    const contact=[
        {img:viber,text:'+96912345689',link:'viber.com'},
        {img:tele,text:'t.me/burma368',link:'telegram.org'},
        {img:fb,text:'www.facebook.com/123',link:'facebook.com'},
    ]
    const copyLink=(link)=>{
      navigator.clipboard.writeText(link)
      toast.success('Link Copied!')
    }
  return (
    <div className='py-4'>
        <h5 className='fw-semibold mb-4 text-center'>{content?.contact?.contact}</h5>
       <div className="w-full px-3">
       {contact.map((item,index)=>{
            return <div key={index} className='mb-3 py-2 rounded-4 contactCard'  >
                <div  className="row" >
                    <div className="col-4 text-end">
                    <img src={item.img} className='contactImg mx-auto ' />
                    </div>
                <p className='col-8 mt-2'>{item.text}</p>
             </div>
             <div className="text-center">
             <button onClick={()=>copyLink(item.link)} className=' btn2 text-white rounded-5 px-3'>{content?.contact?.copy}</button>
             </div>
            </div>
        })}
       </div>
     </div>
  )
}

export default ContactPage
