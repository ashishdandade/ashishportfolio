import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#101820FF] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm ASHISH, nice to meet you</p>
            </div>
            <div>
              <p>I am a Third Year undergrad student persuing Bachelor of Engineering Degree in Information Techonology at SSGMCE Shegaon.</p> 
              <p>I have good knowledge of Frontend Technologies like HTML CSS JS, ReactJs and MongoDB</p> 
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;