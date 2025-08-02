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

        
        <div className="relative w-full">
          <img
            src="/assets/price3.png"
            alt="SubPrice"
            className="w-full h-auto object-contain rounded-[24px]"
          />

          
          <div className="absolute inset-0">
            {/* الزر الأول */}
            <div className="absolute top-[87%] left-[15%] -translate-x-1/2 -translate-y-1/2">
              <button className="bg-[#212121] text-[#FAFAFA] font-bold font-ibm text-[20px] px-5 py-2 rounded-full hover:opacity-90">
                اشترك
              </button>
            </div>

            
            <div className="absolute top-[90%] left-[50%] -translate-x-1/2 -translate-y-1/2">
              <button className="bg-[#AD9A4D] text-[#FAFAFA] font-bold font-ibm text-[20px] px-5 py-2 rounded-full hover:opacity-90">
                اشترك
              </button>
            </div>

            
            <div className="absolute top-[85%] left-[85%] -translate-x-1/2 -translate-y-1/2">
              <button className="bg-[#212121] text-[#FAFAFA] font-bold font-ibm text-[20px] px-5 py-2 rounded-full hover:opacity-90">
                اشترك
              </button>
            </div>
          
          </div>


        </div>
      </div>
    </div>
  );
};

export default Price;
