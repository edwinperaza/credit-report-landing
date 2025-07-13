import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero({ heroImage }: { heroImage: string }) {
  return (
    <section id="home" className="relative w-full py-24 md:py-32 lg:py-40 bg-card overflow-hidden">
       <div className="absolute inset-0 z-0">
        <Image 
          src={heroImage}
          alt="Diverse professionals in a modern office looking at financial charts."
          fill
          objectFit="cover"
          className="opacity-10"
          data-ai-hint="financial growth teamwork"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/50 to-background"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight text-primary mb-4">
            Your Path to Prosperity
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            Empowering individuals and entrepreneurs to enhance their financial standing and achieve a new level of success. Your journey to a brighter tomorrow starts here
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
          <Link href="#contact">Request a Free Consultation</Link>
        </Button>
      </div>
    </section>
  );
}
