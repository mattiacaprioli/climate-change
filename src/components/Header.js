import React from 'react'

// import image
import Image from '../assets/img/planet.jpg';


const Header = () => {
  return (
    <section id='about' className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-10'>
        <img className='object-cover h-full md:w-[266px] mx-auto rounded-2xl' src={Image} alt='immagine pianeta' />

            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                <div className='flex flex-col'>
                    <h1 className='text-black text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative'>
                      Climate Change
                    </h1>
                    <hr className='mb-8 opacity-5' />
                    <p className='mb-8'>
                      Climate change is a pressing global issue that demands our immediate attention. It refers to the long-term alteration of Earth's average weather patterns, primarily caused by human activities such as burning fossil fuels and deforestation. The consequences of climate change are far-reaching, including rising global temperatures, more frequent and severe weather events, and the melting of polar ice caps. It's crucial for individuals, communities, and nations to take collective action to mitigate the effects of climate change, transition to sustainable practices, and protect the planet for future generations.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header