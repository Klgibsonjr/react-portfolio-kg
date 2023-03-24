import React, { useState } from 'react';
import PantryPalImg from '../assets/img/pantry-pal.png';
import EmployeeTrackerImg from '../assets/img/employee-tracker.png';
import NoteTakerImg from '../assets/img/note-taker.png';
import WeatherForecastImg from '../assets/img/weather-forecast.png';
import WorkDaySchedulerImg from '../assets/img/work-day-scheduler.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Project = () => {
  const projects = [
    {
      title: 'Pantry Pal',
      url: 'https://the-pantry-pal.herokuapp.com/',
      repo: 'https://github.com/sieraford/pantry-pal',
      image: PantryPalImg,
      description: 'Pantry Pal',
    },
    {
      title: 'Employee Tracker',
      url: 'https://github.com/Klgibsonjr/employee-tracker-sql',
      repo: 'https://github.com/Klgibsonjr/employee-tracker-sql',
      image: EmployeeTrackerImg,
      description: 'Employee Tracker',
    },
    {
      title: 'Note Taker',
      url: 'https://note-taker-klgibsonjr.herokuapp.com/',
      repo: 'https://github.com/Klgibsonjr/note-taker-express-js',
      image: NoteTakerImg,
      description: 'Note Taker',
    },
    {
      title: 'Weather Forecast Dashboard',
      url: 'https://klgibsonjr.github.io/weather-forecast-dashboard/',
      repo: 'https://github.com/Klgibsonjr/weather-forecast-dashboard',
      image: WeatherForecastImg,
      description: 'Weather Forecast Dashboard',
    },
    {
      title: 'Work Day Scheduler',
      url: 'https://klgibsonjr.github.io/work-day-scheduler/',
      repo: 'https://github.com/Klgibsonjr/work-day-scheduler',
      image: WorkDaySchedulerImg,
      description: 'Work Day Scheduler',
    },
  ];
  const [currectIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currectIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currectIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currectIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currectIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (projectIndex) => {
    setCurrentIndex(projectIndex);
  };

  const gitHubRepo = projects[currectIndex].repo;

  return (
    <div className='max-w-[1400px] h-auto w-full mx-auto py-28 px-4 relative group'>
      <a
        href={projects[currectIndex].url}
        target='_blank'
        rel='noreferrer'
        className='cursor-pointer'
      >
        <img
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
          src={projects[currectIndex].image}
          alt={projects.description}
        />
      </a>
      <a href={gitHubRepo} target='_blank' rel='noreferrer'>
        <button className='absolute  border-2 border-slate-600 left-[45%] top-[90%] rounded-md text-2xl p-2 hover:bg-slate-600'>
          Github
        </button>
      </a>
      <div className='hidden group-hover:block absolute top-[40%] -translate-y-[-40%] md:top-[50%] md:-translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer items-center'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className='hidden group-hover:block absolute top-[40%] -translate-y-[-40%] md:top-[50%] md:-translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center p-2'>
        {projects.map((project, projectIndex) => (
          <div
            key={projectIndex}
            onClick={() => goToSlide(projectIndex)}
            className='cursor-pointer'
          >
            <RxDotFilled size={30} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
