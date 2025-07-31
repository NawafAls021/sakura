import React from "react";

const Body: React.FC = () => {
  return (
    <div className="relative bg-[#212121] w-full max-w-[1440px] mx-auto h-[auto] min-h-[100vh] overflow-hidden rounded-[32px] flex items-center justify-center px-4 sm:px-8 py-16">
      {/* خلفية شفافة */}
      <img
        src="/camera2.jpg"
        alt="background"
        className="absolute w-full h-full object-cover opacity-20 top-0 left-0 z-0"
      />

      {/* محتوى الصفحة */}
      <div className="relative z-10 flex flex-col items-end w-full max-w-[1163px] gap-16 text-right">
        {/* العنوان */}
        <h2 className="font-ibm font-normal text-[32px] sm:text-[48px] lg:text-[69px] text-[#FAFAFA] leading-[66px] tracking-[-0.025em]">
          مالذي <span className="font-bold">نقدمه</span>؟
        </h2>

        {/* الكروت */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 w-full">
          {/* كرت 1 */}
          <div className="w-full max-w-[311px] h-auto rounded-2xl shadow-md p-6 flex flex-col gap-6 text-right bg-[#2e2e2e]">
            <div className="flex justify-end">
              <img src="/assets/icon.png" alt="card logo" className="w-10 h-10" />
            </div>
            <h3 className="font-ibm font-bold text-[20px] sm:text-[24px] text-[#FAFAFA] leading-[34px]">
              شبكة تواصل اجتماعي
            </h3>
            <p className="font-ibm font-normal text-[16px] text-[#FAFAFA] opacity-70 leading-[28px] tracking-tight">
              تواصل مع مصورين آخرين، تبادل الأفكار والخبرات، وابنِ علاقات مهنية جديدة.
            </p>
          </div>

          {/* كرت 2 */}
          <div className="w-full max-w-[311px] h-auto rounded-2xl shadow-md p-6 flex flex-col gap-6 text-right bg-[#2e2e2e]">
            <div className="flex justify-end">
              <img src="/assets/c2.png" alt="card2 logo" className="w-10 h-10" />
            </div>
            <h3 className="font-ibm font-bold text-[20px] sm:text-[24px] text-[#FAFAFA] leading-[34px]">
              دروس ومقالات تعليمية
            </h3>
            <p className="font-ibm font-normal text-[16px] text-[#FAFAFA] opacity-70 leading-[28px] tracking-tight">
              موارد تعليمية تغطي كل جوانب التصوير الفوتوغرافي، من الأساسيات إلى التقنيات المتقدمة.
            </p>
          </div>

          {/* كرت 3 */}
          <div className="w-full max-w-[311px] h-auto rounded-2xl shadow-md p-6 flex flex-col gap-6 text-right bg-[#2e2e2e]">
            <div className="flex justify-end">
              <img src="/assets/c1.png" alt="card1 logo" className="w-10 h-10" />
            </div>
            <h3 className="font-ibm font-bold text-[20px] sm:text-[24px] text-[#FAFAFA] leading-[34px]">
              أدوات تحرير متقدمة
            </h3>
            <p className="font-ibm font-normal text-[16px] text-[#FAFAFA] opacity-70 leading-[28px] tracking-tight">
              مجموعة من الأدوات الرقمية لتحرير الصور وتحسين جودتها.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

 