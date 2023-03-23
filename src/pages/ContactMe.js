import React, { useState } from 'react';

const ContactMe = () => {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');

  const handlInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'name'
      ? setNameInput(value)
      : name === 'email'
      ? setEmailInput(value)
      : setMessageInput(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setNameInput('');
    setEmailInput('');
    setMessageInput('');
  };

  return (
    <form className='w-[50vh] md:w-[100vh] mx-auto mt-8'>
      <div className='mb-6'>
        <label
          htmlFor='name'
          className='block m-2 text-lg font-medium text-gray-900 dark:text-white'
        >
          Name
        </label>
        <input
          value={nameInput}
          type='text'
          name='name'
          onChange={handlInputChange}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Enter name here'
          required
        />
      </div>
      <div className='mb-6'>
        <label
          htmlFor='email'
          className='block m-2 text-lg font-medium text-gray-900 dark:text-white'
        >
          Email
        </label>
        <input
          value={emailInput}
          type='email'
          name='email'
          onChange={handlInputChange}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Enter email here'
          required
        />
      </div>
      <div className='flex items-start mb-6'>
        <div className='flex items-center h-5'></div>
      </div>

      <label
        htmlFor='message'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        Your message
      </label>
      <textarea
        value={messageInput}
        name='message'
        onChange={handlInputChange}
        rows='4'
        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder='Write your thoughts here...'
      ></textarea>

      <button
        type='submit'
        onClick={handleFormSubmit}
        className='text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Submit
      </button>
    </form>
  );
};

export default ContactMe;
