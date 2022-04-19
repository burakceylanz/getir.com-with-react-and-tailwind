import {useState, useEffect} from 'react'
import Title from './ui/Title'
import favoritesData from 'api/product.json'
import ProductItem from './ui/ProductItem'

function Favorites() {
  const [favorite, setFavorite] = useState([])

  useEffect(()=>{
    setFavorite(favoritesData)
  },[])

  return (
    <div className='pt-12'>
    <Title>Favoriler</Title>
    <div className='grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden '>
    {favorite.length && favorite.map((product,index)=><ProductItem key={index} product={product} />)}
    </div>
    </div>
  )
}

export default Favorites