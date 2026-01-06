export const metadata = {
  title: "Summit Portable Buildings | Built The Old Fashioned Way",
  description: "Affordable, high quality, hand crafted, storage buildings built in the USA. Serving Missouri, Illinois, Kentucky, and Arkansas.",
  viewport: "width=device-width, initial-scale=1.0",
  icons: [
    { url: "https://res.cloudinary.com/dwhwbbbev/image/upload/f_auto,q_auto/summit-buildings/favicon", rel: "icon" },
  ],
};


import ClientLayout from './client-layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout htmlAttrs={{"lang":"en"}} >{children}</ClientLayout>;
}