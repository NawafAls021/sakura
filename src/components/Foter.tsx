import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto min-h-[600px] sm:min-h-[800px] lg:min-h-[1080px] bg-[#212121] overflow-hidden px-4 sm:px-8 py-16">
      {/* العنوان */}
      <div className="max-w-[851px] mx-auto text-right mb-16">
        <h1 className="font-ibm font-normal text-[36px] sm:text-[48px] lg:text-[96px] text-[#FAFAFA] leading-[1.2] tracking-tight">
          لماذا سأختار <span className="font-bold">ساكورا</span>؟
        </h1>
      </div>

      {/* النقاط الثلاث */}
      <div className="max-w-[470px] mx-auto flex flex-col gap-4 text-right">
        {["فرص لا تُفوَّت", "أدوات متقدمة", "مجتمع داعم"].map((text, i) => (
          <p
            key={i}
            className="font-ibm font-normal text-[20px] sm:text-[28px] lg:text-[32px] text-[#FAFAFA] leading-[2] tracking-tight"
          >
            {text}
            <span className="text-[#AD9A4D] text-[28px] sm:text-[48px] lg:text-[64px] mx-2">|</span>
          </p>
        ))}
      </div>

     
     <img
  src="/assets/camera3.jpg"
  alt="صورة مميزة"
  className="absolute rounded-full object-cover w-[781px] h-[781px] top-[54px] left-[1049px] hidden lg:block"
/>

    </div>
  );
};

export default Footer;
