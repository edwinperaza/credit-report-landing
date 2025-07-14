
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Services } from '@/components/landing/services';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* <Header /> */}
      <main className="flex-1">
        <Hero heroImage="https://firebasestorage.googleapis.com/v0/b/creditrise-landing-page.firebasestorage.app/o/modern-business-buildings-financial-district.jpg?alt=media&token=61dbeea8-d44f-49af-86ec-4f3244f21f57" />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
