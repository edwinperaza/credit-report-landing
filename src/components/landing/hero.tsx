
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroProps {
  heroImage: string;
  dictionary: {
    title: string;
    subtitle: string;
    cta: string;
  };
}

export function Hero({ heroImage, dictionary }: HeroProps) {
  return (
    <section id="home" className="relative w-full py-20 md:py-24 bg-card overflow-hidden">
       <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage}
          alt="A modern cityscape with a bright sun flare."
          fill
          objectFit="cover"
          className="opacity-20"
          data-ai-hint="cityscape sunset"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/50 to-background"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight text-primary mb-4">
            {dictionary.title}
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            {dictionary.subtitle}
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-primary text-accent-foreground shadow-lg">
          <Link href="#contact">{dictionary.cta}</Link>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[100px] z-10">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z"
            className="fill-card"
          ></path>
        </svg>
      </div>
    </section>
  );
}
