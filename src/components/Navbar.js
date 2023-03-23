import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const handleNavToggle = () => setNavToggle(!navToggle);
  return (
    <nav className='bg-slate-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='/' className='flex items-center'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Ken Gibson
          </span>
        </a>

        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-slate-500 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='/about'
                className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-red-700 md:p-0 dark:text-white'
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href='/portfolio'
                className='block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Portfolio
              </a>
            </li>

            <li>
              <a
                href='/resume'
                className='block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger */}
        <div
          onClick={handleNavToggle}
          className='cursor-pointer md:hidden z-10'
        >
          {!navToggle ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul
          className={
            !navToggle
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center'
          }
        >
          <li className='py-6 text-4xl'>
            <a href='/pages/AboutMe' className=''>
              About Me
            </a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='/pages/Portfolio' className=''>
              Portfolio
            </a>
          </li>

          <li className='py-6 text-4xl'>
            <a href='/pages/Resume' className=''>
              Resume
            </a>
          </li>
          <li className='py-6 text-4xl'>
            <a href='/pages/ContactMe' className=''>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
