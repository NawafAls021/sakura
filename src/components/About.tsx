
const About: React.FC = () => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-[45%] bg-[#F2F2F2] flex justify-end px-4 sm:px-8"
    >
      <div className="w-full max-w-[979px] flex flex-col gap-12 sm:gap-[132px] text-right items-end mx-auto">
        <h2 className="font-ibm text-[32px] sm:text-[48px] lg:text-[96px] leading-[66px] tracking-[-0.025em] text-center">
          من <span className="font-bold">نحن</span>؟
        </h2>

        <p className="font-ibm text-[#212121] text-[16px] sm:text-[20px] lg:text-[24px] leading-[24px] tracking-tight">
          بعد أشهر من العمل الجاد والتخطيط، أُطلقت <span className="font-bold">ساكورا</span> في البداية كموقع بسيط يتيح للمصورين عرض أعمالهم ومشاركة تجاربهم. سرعان ما لاقت المنصة إقبالاً واسعاً من المصورين الذين وجدوا فيها المكان المثالي للتواصل والنمو.
          
          مع مرور الوقت، تطورت <span className="font-bold">ساكورا</span> لتشمل خدمات متنوعة، مثل أدوات التحرير المتقدمة، الدروس التعليمية، والمسابقات الدورية. أصبحت المنصة وجهة رئيسية للمصورين الذين يبحثون عن بيئة محفزة تدعم طموحاتهم الفنية.
          
          اليوم، تفتخر <span className="font-bold">ساكورا</span> بأنها موطن لآلاف المصورين من مختلف أنحاء العالم، وتواصل السعي لتقديم الأفضل لمجتمعها من خلال الابتكار والتطور المستمر. ما بدأ كحلم صغير في ذهن مجموعة من الأصدقاء، تحول إلى منصة رائدة تجمع بين الشغف، الإبداع، والتعاون.
        </p>
      </div>
    </div>
  );
};

export default About;