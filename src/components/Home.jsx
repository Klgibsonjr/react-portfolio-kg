import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-400'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-700 text-xl font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Ken Gibson</h1>
        <h2 className='text-2xl sm:text-5xl'>I'm a Full Stack Developer</h2>
        <p className='text-lg sm:text-2xl py-4 max-w-[700px]'>
          A full stack developer certified through the UCLA Extension Program.
          Knowledgeable in Javascript, HTML, CSS, SQL,NoSQL as well as various
          frameswork like React, NodeJS, ExpressJS, and Tailwind.
        </p>
        <div>
          <Link to='/react-portfolio-kg/about'>
            <button className='border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-slate-800 hover:text-white group'>
              Learn more about me!
              <span className='group-hover:text-4xl'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
