
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, UserCheck, BadgeCheck, HeartHandshake } from 'lucide-react';

const differentiators = [
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Specialized Expertise',
    description: 'Our team brings focused expertise to resolving credit challenges, especially excelling in effectively addressing late payment issues. We\'re dedicated to applying our in-depth knowledge to help you achieve your credit goals.',
  },
  {
    icon: <UserCheck className="h-10 w-10 text-primary" />,
    title: 'Your Personalized Path',
    description: 'We believe in a tailored approach. Our guidance is always objective and designed specifically for your unique financial situation and goals, ensuring honest and transparent support every step of the way.',
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-primary" />,
    title: 'Committed to Your Prosperity',
    description: 'Your financial success is our mission. We\'re dedicated to helping you not just repair your credit, but to achieve lasting financial improvement and enjoy the future you deserve. We\'re here to empower you with the tools and knowledge for true financial well-being.',
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: 'Compassionate Support',
    description: "We understand financial stress can be tough. That's why we handle every client with compassion and genuine care, offering personalized support to ease your worries. You're never just a number to us; we're truly here to guide you.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-transparent hover:border-primary/20 bg-card">
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
