import Hero from "../components/Hero";

import Body from "../components/Body";
import Price from "../components/Price";
import Foter from "../components/Foter";
import FooterE from "../components/FooterE";
export default function LandingPage() {
    return (
        <div className="flex flex-col w-full max-w-[1440px] min-h-[4272px]  mx-auto relative bg-[#212121]">

            <Hero />
           <Body /> 
           <Price />
           <Foter />
          <FooterE />
        </div>
    )
}
