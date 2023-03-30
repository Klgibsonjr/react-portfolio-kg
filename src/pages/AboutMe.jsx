import React from 'react';
import ProfilePic from '../assets/img/portfolio_pic.jpg';

const AboutMe = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-400'>
      <div className='flex w-full h-screen pt-8 pl-6 sm:pt-20 sm:pl-10'>
        <div>
          <img
            className='max-w-[200px] rounded-full'
            src={ProfilePic}
            alt='Portfolio Pic'
          />
        </div>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl sm:text-7xl font-bold inline border-b-4 border-red-700'>
                About Me
              </p>
            </div>
            <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right sm:text-4xl text-2xl font-bold'>
              <p>Hi. My name is Ken, nice to meet you!</p>
            </div>
            <div>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, consectetur soluta praesentium fugiat accusantium
                perspiciatis reiciendis tempora quod non quae eos sequi nobis
                similique ex quidem, error dicta sunt laborum? Suscipit fugit
                iure consequatur eveniet placeat numquam aspernatur facere
                labore possimus saepe est nisi natus, voluptatum illo in illum
                aut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
