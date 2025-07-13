
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">
              About CreditRise
            </h2>
            <p className="text-muted-foreground mb-4">
              At CreditRise, our mission is to empower individuals to achieve their financial goals by providing expert credit repair services. We believe that a healthy credit score is the foundation for a brighter financial future, opening doors to better opportunities and greater peace of mind.
            </p>
            <p className="text-muted-foreground">
              Our team is dedicated to offering personalized, transparent, and effective solutions. We combine our deep industry knowledge with a genuine commitment to our clients' success, guiding them every step of the way on their journey to financial wellness.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://placehold.co/600x400.png"
                alt="CreditRise Team"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="business team"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
