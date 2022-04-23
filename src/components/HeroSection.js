import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

function HeroSection() {

    const [selected, setSelected] = useState("TR");
  
    <ReactFlagsSelect
      selected={selected}
      onSelect={(code) => setSelected(code)}
    />;

    const phones = {
      US: '+1',
      DE: '+50',
      TR: '+90',
      IT: '+71',
      UK: '+55'
    }
  
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3500}
  >
    
      <div className='w-full h-[500px] object-cover bg-cover'><img className='w-full bg-cover' src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg" /></div>
      <div className='w-full h-[500px] object-cover'><img className='w-full' src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg" /></div>
    </AutoplaySlider>
  );

  return (
    <div className='relative md:h-[500px] h-auto before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
     <div>
     {slider}
       </div>
        <div className='container block md:flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
          <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />
          <h3 className='hidden md:block w-[400px] mt-8 text-4xl font-semibold text-white'>Dakikalar içinde kapınızda</h3>
        </div>
        <div className='w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6 '>
          <h4 className='text-primary-brand-color text-center font-semibold '>Giriş yap veya kayıt ol</h4>
          <div className="flex mt-3 gap-2">
                <ReactFlagsSelect
            countries={Object.keys(phones)}
            customLabels={phones}
            placeholder="Select Language"
            onSelect={code => setSelected(code)}
            selected={selected}
            className="flag-select"
          />
          <label className="flex-1 relative block">
              <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer"></input>
              <span className="absolute top-0 left-0 flex items-center h-full px-4 text-sm text-gray-700 peer-focus:h-6 peer-focus:text-xs transition-all peer-valid:h-5 peer-valid:text-xs">Telefon Numarası</span>
          </label>
          </div>
          <button className="bg-brand-yellow w-full border-0 text-primary-brand-color font-[500] transition-all p-3 rounded-lg mt-1 hover:bg-primary-brand-color hover:text-brand-yellow ">Telefon numarası ile devam et</button>
        </div>
        </div>
    </div>
  )
}

export default HeroSection
