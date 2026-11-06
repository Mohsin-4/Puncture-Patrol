import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101F3C",
};

export const metadata = {
  title: "Puncture Patrol | 24/7 Mobile Tyre Service Scotland | Emergency Tyre Fitting",
  description:
    "24/7 emergency mobile tyre fitting and puncture repair across Scotland. Average 30-60 min arrival in Glasgow, Edinburgh, Stirling, Falkirk, Dundee, Aberdeen, Ayr and major Scottish motorways.",
  keywords: [
    "mobile tyre fitting Scotland",
    "emergency mobile tyre repair Glasgow",
    "24/7 mobile tyre Edinburgh",
    "puncture repair Scotland",
    "roadside tyre replacement M8",
    "flat tyre repair Stirling",
    "mobile van tyre fitting",
    "Puncture Patrol"
  ],
  authors: [{ name: "Puncture Patrol Scotland" }],
  openGraph: {
    title: "Puncture Patrol – 24/7 Mobile Tyre Service Scotland",
    description:
      "Flat tyre? Puncture? Puncture Patrol brings professional mobile tyre fitting directly to your location 24/7 anywhere in Scotland.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface-light text-surface-dark font-sans antialiased selection:bg-coral selection:text-white">
        {children}
      </body>
    </html>
  );
}
