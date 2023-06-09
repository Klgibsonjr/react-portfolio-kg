import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className=' bg-slate-500 rounded-lg shadow fixed w-full bottom-0 dark:bg-gray-800'>
      <div className='w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-around'>
        <a
          href='mailto:'
          className='text-xl  sm:text-center dark:text-gray-400'
        >
          Klgibsonjr@gmail.com
        </a>
        <ul className='flex flex-wrap items-center gap-4 mt-3 text-sm  dark:text-gray-400 sm:mt-0'>
          <li>
            <a
              href='https://www.linkedin.com/in/ken-gibson-74a02047/'
              target='_blank'
              rel='noreferrer'
              className='mr-4  md:mr-6 '
            >
              <BsLinkedin size={30} />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Klgibsonjr'
              target='_blank'
              rel='noreferrer'
              className='mr-4  md:mr-6'
            >
              <BsGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/kdizzle_nb/'
              target='_blank'
              rel='noreferrer'
              className='mr-4  md:mr-6'
            >
              <BsInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
