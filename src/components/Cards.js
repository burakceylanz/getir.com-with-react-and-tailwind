import React from 'react'

function Cards() {
  return (
    <section className='mt-12 w-full block md:flex flex-col'>
        <div className='w-full block md:flex justify-between items-stretch'>
          <div className='mr-0 md:mr-4 p-4 md:p-0 flex-1 block md:flex  items-start'>
            <div className='items-center justify-start pt-14 pb-8 h-full p-4 flex flex-col w-full bg-white rounded-lg mr-0 md:mr-4 mb-4 md:mb-0'>
                <figure className='flex items-center overflow-hidden justify-center'>
                  <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg"/>
                </figure>
                <span className='font-semibold text-primary-brand-color mt-6'>Her siparişinize bir kampanya</span>
                <span className='mt-2 text-gray-500 text-base text-center'>Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz.</span>
            </div>

            <div className='items-center justify-start pt-14 pb-8 h-full p-4 flex flex-col w-full bg-white rounded-lg mr-4 '>
                <figure className='flex items-center overflow-hidden justify-center'>
                  <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg"/>
                </figure>
                <span className='font-semibold text-primary-brand-color mt-6'>Her siparişinize bir kampanya</span>
                <span className='mt-2 text-gray-500 text-base text-center'>Getir’le siparişiniz dakikalar içinde kapınıza gelir.</span>
            </div>

            <div className='items-center justify-start pt-14 pb-8 h-full p-4 flex flex-col w-full bg-white rounded-lg '>
                <figure className='flex items-center overflow-hidden justify-center'>
                  <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"/>
                </figure>
                <span className='font-semibold text-primary-brand-color mt-6'>Her siparişinize bir kampanya</span>
                <span className='mt-2 text-gray-500 text-base text-center'>Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.</span>
            </div>
            
          </div>
        </div> 
    
    </section>
  )
}

export default Cards
