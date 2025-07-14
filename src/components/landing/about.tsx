
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4 text-primary">
              About Us
            </h2>
            <p className="text-muted-foreground mb-4">
              Our goal is simple: to be your trusted, expert partner on the path to financial freedom. We're committed to guiding individuals and businesses ethically and effectively, laying out a clear, proven way to significantly improve your financial health and credit score, helping you achieve prosperity and grow financially.
            </p>
            <p className="text-muted-foreground">
              We're the true credit repair company that works, dedicated to helping you see results quickly. Our clients often experience significant progress in less than 60 days through our easy and secure process. Just like many others we've helped, you can achieve the financial future you deserve.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden rounded-xl shadow-lg">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/creditrise-landing-page.firebasestorage.app/o/smiling-business-team-using-laptop.jpg?alt=media&token=b0fadb63-bab8-472f-bd99-ae152ffe8910"
                alt="Smiling business team working on a laptop"
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
