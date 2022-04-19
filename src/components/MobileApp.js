import React from 'react'

function MobileApp() {
  return (
    <section className='relative flex  items-center overflow-hidden bg-primary-brand-color min-h-slider bg-hero-pattern rounded-lg z-1 mb-6 mt-12'>
      <div className='flex  flex-col items-start h-100 justify-center ml-12'>
        <h2 className='text-white font-semibold size text-2xl'>Getir'i indirin!</h2>
        <span className='font-semibold text-base text-white mt-4'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</span>
        <nav className='flex pt-8'>
          <a href="#." className='mr-2'><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"/>
          </a>
          <a href="#." className='mr-2'><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"/>
          </a>
          <a href="#." className='mr-2'><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"/>
          </a>
        </nav>
        <figure className='absolute right-0 -bottom-2 ml-64'>
          <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"/>
        </figure>
      </div>
    </section>
  )
}

export default MobileApp