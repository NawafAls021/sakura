import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      className="absolute top-[20px] left-1/2 transform -translate-x-1/2 
                 w-[90%] max-w-[1263px] flex items-center justify-between 
                 px-4 py-3 rounded-full z-50"
    >
      {/* الشعار */}
      <div className="w-[40px] h-[40px] flex items-center justify-center">
        <img
          src="/assets/logoss.png"
          alt="Sakura Logo"
          className="w-[16px] h-[23px] object-contain"
        />
      </div>

      {/* روابط التنقل */}
      <div
        className="font-ibm flex flex-wrap gap-4 sm:gap-6 md:gap-10 text-[#212121] 
                   text-[16px] sm:text-[20px] md:text-[24px] font-medium text-center leading-[24px] tracking-[0%]"
        
      >
        <a href="#features" className="hover:opacity-90">المصورين</a>
        <a href="#services" className="hover:opacity-90">الأسعار</a>
        <a href="#pricing" className="hover:opacity-90">خدماتنا</a>
        <a href="#photographers" className="hover:opacity-90">المميزات</a>
      </div>
    </div>
  );
};

export default Header;