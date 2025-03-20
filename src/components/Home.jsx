import React from 'react'
import  illustration  from '../images/illustration-intro.svg'
import tabletPattern from '../images/bg-tablet-pattern.svg'

export const Home = () => {
  return (
    <section className='wrapper grid gap-8 justify-items-center items-center pb-12 md:grid-cols-2 md:py-24'>
      <img className='w-full max-w-lg md:order-1' src={illustration} alt="" />

      <article className='text-center space-y-6 md:text-left md:space-y-8'>
        <h1 className='text-4xl font-bold text-very-dark-blue md:text-5xl'>Bring everyone together to build better products.</h1>
        <p className='text-dark-grayish-blue'>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
        <a href="#" className='button mx-auto shadow-xl shadow-bright-red/30 md:mx-0'>Get Started</a>
      </article>
      <figure className='absolute inset-0 overflow-hidden pointer-events-none'>
        <img className='absolute w-full -z-10 -top-28 -right-[50px] max-w-2xl' src={tabletPattern} alt="" />
      </figure>
    </section>


  )
}
