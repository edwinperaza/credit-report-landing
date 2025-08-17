
import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface AboutProps {
  dictionary: {
    title: string;
    p1: string;
    p2: string;
  };
}

export function About({ dictionary }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">
              {dictionary.title}
            </h2>
            <p className="text-muted-foreground mb-4">
              {dictionary.p1}
            </p>
            <p className="text-muted-foreground">
              {dictionary.p2}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/creditrise-landing-page.firebasestorage.app/o/smiling-business-team-using-laptop.jpg?alt=media&token=b0fadb63-bab8-472f-bd99-ae152ffe8910"
                alt="Smiling business team reviewing financial data on a laptop at Ascendant Way Consulting"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="business team laptop"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
