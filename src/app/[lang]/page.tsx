
import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { Services } from '@/components/landing/services';
import { WhyChooseUs } from '@/components/landing/why-choose-us';
import { Contact } from '@/components/landing/contact';
import { Footer } from '@/components/landing/footer';
import { getDictionary } from '@/dictionaries/get-dictionary';
import { Locale } from '@/i18n-config';


export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header lang={lang} dictionary={dictionary.header} />
      <main className="flex-1">
        <Hero 
          heroImage="https://firebasestorage.googleapis.com/v0/b/creditrise-landing-page.firebasestorage.app/o/modern-business-buildings-financial-district.jpg?alt=media&token=61dbeea8-d44f-49af-86ec-4f3244f21f57" 
          dictionary={dictionary.hero}
        />
        <About dictionary={dictionary.about} />
        <Services dictionary={dictionary.services} />
        <WhyChooseUs dictionary={dictionary.whyChooseUs} />
        <Contact dictionary={dictionary.contact} />
      </main>
      <Footer dictionary={dictionary.footer}/>
    </div>
  );
}
