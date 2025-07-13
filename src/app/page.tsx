
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Services } from '@/components/landing/services';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { generateHeroImage } from '@/ai/flows/generate-hero-image-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';

function HeroSection() {
  return (
    <Suspense fallback={<Skeleton className="w-full h-[540px]" />}>
      <HeroLoader />
    </Suspense>
  )
}

async function HeroLoader() {
  const { imageUrl } = await generateHeroImage();
  return <Hero heroImage={imageUrl} />;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
