import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <div> 

<Footer bgDark>
      <div className="w-full px-4 lg:px-24">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" className=' font-bold hover:text-white' />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='  hover:text-white'>About</Footer.Link >
              <Footer.Link href="#" className='  hover:text-white'>Careers</Footer.Link>
              <Footer.Link href="#" className='  hover:text-white'>Brand Center</Footer.Link>
              <Footer.Link href="#" className='  hover:text-white'>Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center"  className='  hover:text-white'/>
            <Footer.LinkGroup col>
              <Footer.Link href="#" className='  hover:text-white'>Discord Server</Footer.Link>
              <Footer.Link href="#" className='  hover:text-white'>Twitter</Footer.Link>
              <Footer.Link href="#" className='  hover:text-white'>Facebook</Footer.Link>
              <Footer.Link href="#"className='  hover:text-white'>Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal"className='  hover:text-white' />
            <Footer.LinkGroup col>
              <Footer.Link href="#"className='  hover:text-white'>Privacy Policy</Footer.Link>
              <Footer.Link href="#"className='  hover:text-white'>Licensing</Footer.Link>
              <Footer.Link href="#"className='  hover:text-white'>Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" className='  hover:text-white' />
            <Footer.LinkGroup col>
              <Footer.Link href="#"className='  hover:text-white'>iOS</Footer.Link>
              <Footer.Link href="#"className='  hover:text-white'>Android</Footer.Link>
              <Footer.Link href="#"className='  hover:text-white'>Windows</Footer.Link>
              <Footer.Link href="#"className='  hover:text-white'>MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="SanketMakade" year={2024} className='  hover:text-white'/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className='  hover:text-white' />
            <Footer.Icon href="#" icon={BsInstagram} className='  hover:text-white' />
            <Footer.Icon href="#" icon={BsTwitter} className='  hover:text-white' />
            <Footer.Icon href="#" icon={BsGithub}className='  hover:text-white'/>
            <Footer.Icon href="#" icon={BsDribbble} className='  hover:text-white'/>
          </div>
        </div>
      </div>
    </Footer>
    </div>
  )
}

export default MyFooter