import React from 'react';
import Header from './Header';
import About from './About';

const Hero: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[1440px] mx-auto rounded-[32px] bg-cover bg-center h-[2100px]"
      style={{
        backgroundImage: "url('/camera.jpg')",
      }}>
       
      
    
      <Header />

      <div
        className="absolute flex flex-col items-end text-right gap-[43px] text-[#212121]
        w-[90%] sm:w-[722px] h-[345px] left-1/2 transform -translate-x-1/2 top-[355px]"
      >
        <h1
    
          className="custom-heading"
        >
          ساكورا
        </h1>

        <p
          className="custom-text"
        >
          وجهتك الأولى للإبداع والتواصل مع مجتمع المصورين المحترفين والهواة على حدٍ سواء. نحن هنا لنقدم لك كل ما تحتاجه لتنمية مهاراتك، تحسين أعمالك، وتسويق إبداعاتك
        </p>

        <button
          className="coustom-button"
        >
          اشترك معنا
        </button>
      </div>

      <About />
    </div>
  );
};

export default Hero;

