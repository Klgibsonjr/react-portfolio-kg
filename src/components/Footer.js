import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer class=' bg-white rounded-lg shadow m-4 dark:bg-gray-800'>
      <div class='w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between'>
        <span class='text-lg text-gray-700 sm:text-center dark:text-gray-400'>
          Ken Gibson{'  '}
          <a href='https://flowbite.com/' class='hover:underline'></a>
          Full-stack developer
        </span>
        <ul class='flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='#' class='mr-4 hover:underline md:mr-6 '>
              <BsLinkedin size={25} />
            </a>
          </li>
          <li>
            <a href='#' class='mr-4 hover:underline md:mr-6'>
              <BsGithub size={25} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
