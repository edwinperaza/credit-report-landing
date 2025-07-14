import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ClipboardList, BookOpen, TrendingUp, ShieldCheck, Telescope, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Rebuild Your History',
    description: 'We challenge inaccurate negative items on your credit report, working directly with bureaus and creditors. We\'ll do our best to ensure your credit history is accurate and up-to-date, laying a strong foundation for your financial comeback.',
  },
  {
    icon: <Telescope className="h-10 w-10 text-primary" />,
    title: 'Track Your Progress',
    description: "Stay in control with our 24/7 credit monitoring system. We keep a vigilant eye on your reports, tracking progress and instantly alerting you to any changes. We're here to provide professional guidance, ensuring you're always informed and empowered throughout your journey.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Plan Your Tomorrow',
    description: 'Beyond just repairing your credit, we arm you with the financial wisdom and powerful tools to make smart decisions and secure a prosperous future. We empower you with ongoing support and resources, ensuring you have everything you need to maintain your newfound financial health.',
  },
  {
    icon: <ClipboardList className="h-10 w-10 text-primary" />,
    title: 'Credit Report Analysis',
    description: 'Secure your future with 24/7 credit monitoring and real-time alerts. Track your score and get personalized insights to improve your credit health. A strong credit profile, built through diligent monitoring, secures better loan terms, job opportunities, and access to essential financial products.',
  },
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: 'Consultation & Education',
    description: 'Get financial advice built just for you. Our consultations offer personalized recommendations based on your goals, risk tolerance, and current finances. We\'ll partner with you to understand your unique situation, delivering customized strategies to help you achieve your financial aspirations effectively and with confidence.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Credit Transformation',
    description: 'Plan and Conduct your credit repair with confidence. We offer comprehensive support to rebuild your history, track your progress, and plan your tomorrow. Benefit from 24/7 monitoring and the guidance of our professional team, with access to a pipeline of additional financial professionals once your credit is restored.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
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
