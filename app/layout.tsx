import './globals.css';
import type { Metadata } from 'next';
import { Bellefair } from 'next/font/google';

const bellefair = Bellefair({
  subsets: ['hebrew'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Carousel',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={bellefair.className}>
        {children}
      </body>
    </html>
  );
}
