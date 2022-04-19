import React from 'react'

function Menu({title, items}) {
  return (
    <section>
    <nav className='grid gap-y-4'>
    <h6 className='text-lg text-primary-brand-color'>{title}</h6>
    <nav>
        <ul>
            {items.map((item, key)=>(
                <li key={key} className='pb-4'>
                    <a href="#.">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
    </nav>
  </section>
  )
}

export default Menu