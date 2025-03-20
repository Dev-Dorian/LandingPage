import React from 'react'
import iconFacebook from '../images/icon-facebook.svg'
import iconYouTube from '../images/icon-youtube.svg'
import iconTwitter from '../images/icon-twitter.svg'
import iconPinterest from '../images/icon-pinterest.svg'
import iconInstagram from '../images/icon-instagram.svg'
import imgLogo from '../images/logo-white.svg'

export const Footer = () => {
  return (
    <footer className='bg-very-dark-blue py-24'>
      <section className='wrapper grid gap-12 justify-items-center footer-area md:footer-area-md md:grid-cols-3 md:justify-items-stretch'>
        <form className="flex gap-4 w-full min-w-[100px] [grid-area:form]">
          <input className='min-w-[50px] flex-1 rounded-full px-4' type="email" placeholder='Updates in your inbox...'/>
          <input className='py-3 px-8 bg-bright-red rounded-full text-white' type="submit" value='GO'/>
        </form>
        <nav className='grid grid-cols-[max-content_max-content] gap-y-4 justify-between text-white w-4/5 [grid-area:navigation] md:w-full'>
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Products</a>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Comunityt</a>
          <a href="">Privacy Policy</a>
        </nav>
        <div className='flex flex-wrap gap-4 justify-between w-full [grid-area:social-media]'>
          <a href="">
            <img className='w-8' src={iconFacebook} alt="" />
          </a>
          <a href="">
            <img className='w-8' src={iconYouTube} alt="" />
          </a>
          <a href="">
            <img className='w-8' src={iconTwitter} alt="" />
          </a>
          <a href="">
            <img className='w-8' src={iconPinterest} alt="" />
          </a>
          <a href="">
            <img className='w-8' src={iconInstagram} alt="" />
          </a>
        </div>
        <a href="">
          <img className='[grid-area:logo]' src={imgLogo} alt="" />
        </a>
        <p className=' text-dark-grayish-blue text-center [grid-area:copy] md:text-right' >Copyright 2020. All Rights Reserved</p>
      </section>
    </footer>
  )
}
