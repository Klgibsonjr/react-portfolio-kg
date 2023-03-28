import React from 'react';

const AboutMe = () => {
  return (
    <div name='about' className='w-full h-screen bg-slate-400'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl sm:text-7xl font-bold inline border-b-4 border-red-700'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right sm:text-4xl text-2xl font-bold'>
            <p>Hi. My name is Ken, nice to meet you!</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi, consectetur soluta praesentium fugiat accusantium
              perspiciatis reiciendis tempora quod non quae eos sequi nobis
              similique ex quidem, error dicta sunt laborum? Suscipit fugit iure
              consequatur eveniet placeat numquam aspernatur facere labore
              possimus saepe est nisi natus, voluptatum illo in illum aut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
