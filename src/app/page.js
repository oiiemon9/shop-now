import HerroSection from '@/components/HeroSection/HerroSection';
import JoinNewsletter from '@/components/JoinNewsletter/JoinNewsletter';
import LatestProducts from '@/components/LatestProducts/LatestProducts';
import Marquee from '@/components/Marquee/Marquee';
import OurSpecifications from '@/components/OurSpecifications/OurSpecifications';
import TopSelling from '@/components/TopSelling/TopSelling';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="max-w-[1340px] mx-auto px-2">
        <HerroSection></HerroSection>
        <Marquee></Marquee>
        <LatestProducts></LatestProducts>
        <TopSelling></TopSelling>
        <OurSpecifications></OurSpecifications>
        <JoinNewsletter></JoinNewsletter>
      </div>
    </main>
  );
}
