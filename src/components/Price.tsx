import React from "react";

const Price: React.FC = () => {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto min-h-[100vh] bg-[#FAFAFA] px-4 sm:px-8 py-16 flex justify-center items-center">
      <div className="w-full max-w-[981px] flex flex-col gap-16 text-center">
        {/* العنوان والوصف */}
        <div className="flex flex-col gap-4">
          <h2 className="font-ibm font-bold text-[32px] sm:text-[48px] lg:text-[64px] text-[#212121] leading-[60px] tracking-tight">
            الأسعار وخطط الاشتراك
          </h2>
          <p className="font-ibm font-normal text-[16px] sm:text-[18px] lg:text-[20px] text-[#212121] opacity-70 leading-[30px]">
            باقات مختلفة تساعدك في الوصول لهدفك
          </p>
        </div>

        {/* صورة الباقات */}
        <div className="relative w-full">
          <img
            src="/assets/price3.png"
            alt="SubPrice"
            className="w-full h-auto object-cover rounded-[24px]"
          />

         {/* أزرار الاشتراك */}
<div className="hidden sm:block">
  <button
    className="absolute bg-[#212121] text-[#FAFAFA] font-bold font-ibm text-[24px] px-5 py-2 rounded-full hover:opacity-90 top-[400px] left-[775px]"
  >
    اشترك
  </button>

  <button
    className="absolute bg-[#AD9A4D] text-[#FAFAFA] font-bold font-ibm text-[24px] px-5 py-2 rounded-full hover:opacity-90 top-[390px] left-[440px]"
  >
    اشترك
  </button>

  <button
    className="absolute bg-[#212121] text-[#FAFAFA] font-bold font-ibm text-[24px] px-5 py-2 rounded-full hover:opacity-90 top-[400px] left-[110px]"
  >
    اشترك
  </button>
</div>



        </div>
      </div>
    </div>
  );
};

export default Price;
