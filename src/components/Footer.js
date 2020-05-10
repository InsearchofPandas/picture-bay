import React from 'react';
function Footer() {
  return (
    <div className='w-screen my-10 bg-gray-100'>
      <div className='p-4 flex flex-col items-center'>
        <a href='https://kylehumphrey.com' target='_blank' rel='noopener noreferrer' className='m-1 text-xl '>
          Made by Kyle Humphrey
        </a>
        <a href='https://github.com/InsearchofPandas/picture-bay' target='_blank' rel='noopener noreferrer' className='m-1 text-xl '>
          View Code on GitHub
        </a>
        <a href='https://www.youtube.com/watch?v=FiGmAI5e91M' target='_blank' rel='noopener noreferrer' className='m-1 text-xl '>
          Project based on tutorial by Traversy Media
        </a>
      </div>
    </div>
  );
}

export default Footer;
