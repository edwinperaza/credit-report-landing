
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, BookOpen, TrendingUp, ShieldCheck, Telescope, Lightbulb } from 'lucide-react';

interface ServicesProps {
  dictionary: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
}

const icons = [
  <ShieldCheck key="rebuild" className="h-10 w-10 text-primary" />,
  <Telescope key="track" className="h-10 w-10 text-primary" />,
  <Lightbulb key="plan" className="h-10 w-10 text-primary" />,
  <ClipboardList key="analysis" className="h-10 w-10 text-primary" />,
  <BookOpen key="consultation" className="h-10 w-10 text-primary" />,
  <TrendingUp key="transformation" className="h-10 w-10 text-primary" />,
];

export function Services({ dictionary }: ServicesProps) {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {dictionary.title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            {dictionary.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {dictionary.items.map((service, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  {icons[index]}
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
