import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, Gavel, TrendingUp, ShieldCheck, Telescope, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <ClipboardList className="h-10 w-10 text-primary" />,
    title: 'Credit Report Analysis',
    description: 'We dive deep into your credit reports from all three major bureaus to identify errors, inaccuracies, and opportunities for improvement.',
  },
  {
    icon: <Gavel className="h-10 w-10 text-primary" />,
    title: 'Dispute Resolution',
    description: 'Our experts handle the entire dispute process with credit bureaus and creditors on your behalf, saving you time and stress.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Credit Score Improvement',
    description: 'We provide personalized strategies and ongoing guidance to help you build positive credit history and maintain a healthy score for the long term.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Rebuild Your History',
    description: 'We work diligently to challenge and remove negative items from your credit history, laying a clean foundation for your financial comeback.',
  },
  {
    icon: <Telescope className="h-10 w-10 text-primary" />,
    title: 'Track Your Progress',
    description: 'Stay informed with our credit monitoring service. We keep an eye on your reports and alert you to changes, so you\'re always in control.',
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Plan Your Tomorrow',
    description: 'Beyond repair, we equip you with the financial literacy and tools needed to make smart decisions and secure a prosperous future.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            How We Help You Rise
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            Our comprehensive services are designed to address your credit issues from every angle.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  {service.icon}
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
