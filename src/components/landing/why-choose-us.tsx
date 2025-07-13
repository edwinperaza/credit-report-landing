
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, UserCheck, BadgeCheck } from 'lucide-react';

const differentiators = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Decades of Expertise',
    description: 'Our team has years of experience navigating the complexities of the credit industry to get you the best results.',
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'Personalized Approach',
    description: 'We don\'t believe in one-size-fits-all. We create a tailored credit repair plan that fits your unique financial situation and goals.',
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: 'Proven Results',
    description: 'We have a strong track record of successfully helping clients improve their credit scores and achieve their financial dreams.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            The CreditRise Advantage
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            Discover why so many clients trust us to guide them on their path to better credit.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary/20">
              <CardHeader className="flex flex-col items-center">
                 <div className="mb-4 p-4 bg-primary/10 rounded-full">
                  {item.icon}
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
