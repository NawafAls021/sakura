import React from "react";

const FooterE: React.FC = () => {
  return (
    <div className="w-full max-w-[1266px] mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[#F2F2F2]">
      <div className="text-center sm:text-right text-sm sm:text-base font-ibm font-normal">
        © جميع الحقوق محفوظة لمنصة <span className="font-bold">ساكورا</span> 2024
      </div>

      <div className="flex flex-wrap gap-4 text-sm sm:text-base font-ibm font-normal text-right">
        <a href="#about" className="hover:text-[#AD9A4D] transition">الدعم الفني</a>
        <a href="#contact" className="hover:text-[#AD9A4D] transition">الشروط</a>
        <a href="#support" className="hover:text-[#AD9A4D] transition">من نحن</a>
      </div>
    </div>
  );
};

export default FooterE;
