
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Ascendant Way Consulting - Reparamos tu crédito',
  description: 'Empoderamos a individuos y emprendedores a mejorar su situación financiera.',
  openGraph: {
    title: 'Ascendant Way Consulting - Reparamos tu crédito',
    description: 'Empoderamos a individuos y emprendedores a mejorar su situación financiera y alcanzar un nuevo nivel de éxito.',
    url: 'https://ascendantwayconsulting.com',
    siteName: 'Ascendant Way Consulting',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/creditrise-landing-page.firebasestorage.app/o/og-image.png?alt=media&token=e93b9b47-3a85-4421-953e-80c12e8a15b3',
        width: 1200,
        height: 630,
        alt: 'A team of professionals working together at Ascendant Way Consulting',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ascendant Way Consulting - Reparamos tu crédito',
    description: 'Empoderamos a individuos y emprendedores a mejorar su situación financiera.',
    images: ['https://firebasestorage.googleapis.com/v0/b/creditrise-landing-page.firebasestorage.app/o/og-image.png?alt=media&token=e93b9b47-3a85-4421-953e-80c12e8a15b3'],
  },
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang ?? 'en'}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '690550910670690');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=690550910670690&ev=PageView&noscript=1"
          />
        </noscript>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
