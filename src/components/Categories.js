import {useState, useEffect} from 'react'
import categoryData from '../api/categories.json'
import Category from './ui/Category'
import Title from './ui/Title'

function Categories() {
  const [categories, setCategories] = useState([]);
  
  useEffect(()=> {
    setTimeout(()=>{
      setCategories(categoryData)
    }, 3000) 
  },[])

  return (
    <div className='bg-white py-4 shadow-lg shadow-[#583fb514]-500/30'>
      <div className='container mx-auto'>
        <Title>Kategoriler</Title>
        {!categories.length && <div className='grid justify-center '>
          <img className='flex justify-center' src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className='text-brand-color font-semibold'>Kategoriler Yükleniyor...</h3>
          </div>}
        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-10'>
          {categories && categories.map((category,index)=><Category key={index} category={category}/>)}
        </div>


      </div>
      </div>
  )
}

export default Categories
