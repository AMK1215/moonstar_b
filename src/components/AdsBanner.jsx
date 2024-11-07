import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import useFetch from '../hooks/useFetch'
import BASE_URL from '../hooks/baseUrl'

const AdsBanner = () => {

    const {data:ads} =useFetch(BASE_URL+"/popup-ads-banner")
    // console.log('ads',ads)
    const MySwal = withReactContent(Swal)

    const adsFire=()=>{
        MySwal.fire({
             imageUrl:ads?.img_url,
            // imageHeight:150,
            //  text:"🙏🏻မင်္ဂလာရှိသော နေ့ခင်းလေးပါ👦🏻 သူငယ်ချင်းမိတ်ဆက် 10%💰 🏠အိမ်မှာနေရင်း 🎰 Betting King မှာပူးပေါင်းပြီး🤝 အလွယ်တကူ ဝင်ငွေရှာလိုက်ပါ သူငယ်ချင်းမိတ်ဆက်ပေးပြီး ဘယ်မှာမှ မရနှိင်တဲ့ 🏆ဆုလက်ဆောင် 10% များရယူပါနော်  Betting King 🙏🙏🙏🤝🙏🙏🙏"
           })
    }
    useEffect(()=>{
        if(ads?.img_url) adsFire()
    },[ads])
  return (
    <div>
     </div>
  )
}

export default AdsBanner
