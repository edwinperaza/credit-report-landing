
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
        <Hero heroImage="https://storage.googleapis.com/project-os-prod/images/4294b0d0-e1b1-4770-9b43-2384c7183e8b.jpg" />
        <About />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
