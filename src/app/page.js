import HerroSection from '@/components/HeroSection/HerroSection';
import LatestProducts from '@/components/LatestProducts/LatestProducts';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="max-w-[1340px] mx-auto px-2">
        <HerroSection></HerroSection>
        <LatestProducts></LatestProducts>
      </div>
    </main>
  );
}
