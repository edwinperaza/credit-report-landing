
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, UserCheck, Rocket, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
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
  <Award key="expertise" className="h-10 w-10 text-primary" />,
  <UserCheck key="path" className="h-10 w-10 text-primary" />,
  <Rocket key="prosperity" className="h-10 w-10 text-primary" />,
  <HeartHandshake key="support" className="h-10 w-10 text-primary" />,
];

export function WhyChooseUs({ dictionary }: WhyChooseUsProps) {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            {dictionary.title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            {dictionary.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {dictionary.items.map((item, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary/20 bg-card">
              <CardHeader className="flex flex-col items-center">
                 <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  {icons[index]}
                </div>
                <CardTitle className="font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
