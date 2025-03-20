import React from 'react'
import imgAli from '../images/avatar-ali.png'

export const Reference = () => {
  return (
    <section className='wrapper text-center py-24 max-w-lg mx-auto md:max-w-xl'>
      <h2 className='text-3xl font-bold text-very-dark-blue md:text-4xl'>What they`ve said</h2>
      <div className='mt-24 mb-14'>
        <article className=' bg-vary-light-gray pt-16 pb-12 px-4 relative'>
          <img className='absolute w-24 aspect-square -top-12 inset-x-0 mx-auto' src={imgAli} alt="" />
          <h3 className='text-xl mb-4 pt-2 font-bold text-very-dark-blue'>Ali Bravo</h3>
          <p className='text-dark-grayish-blue'>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
        </article>
      </div>
      <a className='button mx-auto shadow-xl shadow-bright-red/30' href="">Get Started</a>
    </section>
  )
}
