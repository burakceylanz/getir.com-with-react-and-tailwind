import {useState, useEffect} from 'react'
import { Collapse } from 'react-collapse'
import {useWindowWidth} from "@react-hook/window-size"
import {IoIosArrowDown} from "@react-icons/all-files/io/IoIosArrowDown"

function Menu({title, items}) {

    const windowWith = useWindowWidth()
    const [isOpen, setisOpen] =useState(true)
    
    const toggleCollapse = () => {
        if(windowWith <= 768) {
        setisOpen(!isOpen)
    } }

    useEffect(()=>{
        if(isOpen && windowWith <= 768){
            setisOpen(false)
        }
        if(isOpen&&windowWith > 768){
            setisOpen(true)
        }
    },[windowWith])

  return (
    <section>
    <nav className='grid gap-y-2 md:gap-y-4'>
    <h6 onClick={toggleCollapse} className='text-lg text-primary-brand-color cursor-pointer md:cursor-auto flex items-center justify-between'>{title}
    <button className=' md:hidden grid place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color'>
            <span className={`transition-all transform ${isOpen ? '-rotate-180' : ''}`}> 
             <IoIosArrowDown size={14}/>
            </span>
        </button></h6>
    <Collapse isOpened={isOpen}>
    <nav>
        <ul className='grid gap-y-1 md:gap-y-2'>
            {items.map((item, key)=>(
                <li key={key} className='pb-4'>
                    <a href="#.">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    </Collapse>
    </nav>
  </section>
  )
}

export default Menu
