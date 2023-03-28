import React from 'react';

const Resume = () => {
  return (
    <div className='w-full h-screen bg-slate-400'>
      <h1 className='text-4xl text-center py-8'>Proficiencies</h1>
      <div className='flex flex-col justify-center items-center gap-8'>
        <div>
          <h2 className='text-2xl font-bold text-center'>Front-End</h2>
          <li>HTML</li>
          <li>REACT</li>
          <li>Tailwind CSS</li>
        </div>
        <div>
          <h2 className='text-2xl font-bold text-center'>Back-End</h2>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>MongoDB</li>
        </div>
      </div>
    </div>
  );
};

export default Resume;
