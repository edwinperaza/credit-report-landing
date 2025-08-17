
import type { Metadata } from 'next';
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
        <link rel="icon" href="https://firebasestorage.googleapis.com/v0/b/creditrise-landing-page.firebasestorage.app/o/favicon.ico?alt=media&token=18881810-5705-44db-a2f5-d537cf1ec84b" sizes="any" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
