import Marquee from "react-fast-marquee";
import ScrollThemeSection from "@/components/scroll-theme-section";
import Img1 from "@/public/marque-img-1.png";
import Img2 from "@/public/marque-img-2.png";
import Img3 from "@/public/marque-img-3.png";
import Img4 from "@/public/marque-img-4.png";
import Img5 from "@/public/marque-img-5.png";
import Img6 from "@/public/marque-img-6.png";
import Image from "next/image";

export default function TrustedBrands() {
  return (
    <ScrollThemeSection className="container space-y-8">
      <p className="text-sm text-center">Trusted By Brands That Get It</p>
      <Marquee autoFill>
        <Image src={Img1} alt="" />
        <Image src={Img2} alt="" />
        <Image src={Img3} alt="" />
        <Image src={Img4} alt="" />
        <Image src={Img5} alt="" />
        <Image src={Img6} alt="" />
      </Marquee>
    </ScrollThemeSection>
  );
}
