import {useState, useEffect} from 'react'
import BannersData from '../api/Banners.json'
import Title from './ui/Title'

function Campaigns() {
  const [banner, setBanner] = useState([])

  useEffect(()=>{
  setBanner(BannersData)
  },[])

  return (
      <div className='container mx-auto pt-12'>
         <Title>Kampanyalar</Title>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
          {banner.length && banner.map((banners,index)=>(
            <div key={index} className='p-2'><img src={banners.image} className='rounded-lg'/></div>
          ))}
        </div>
      </div>  
  )
}

export default Campaigns
