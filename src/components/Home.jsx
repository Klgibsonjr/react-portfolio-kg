import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-400'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-700 text-xl font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold'>Ken Gibson</h1>
        <h2 className='text-2xl sm:text-5xl'>I'm a Full Stack Developer</h2>
        <p className='text-xl sm:text-2xl py-4 max-w-[700px]'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eos,
          impedit unde, laborum amet doloremque deserunt quasi similique
          molestias voluptatum incidunt distinctio magnam, alias esse harum enim
          nemo dolorum iure!
        </p>
        <div>
          <a href='/portfolio'>
            <button className='border-2 rounded-md px-6 py-3 my-2 flex items-center hover:bg-slate-800 hover:text-white group'>
              View Work
              <span className='group-hover:text-4xl'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
