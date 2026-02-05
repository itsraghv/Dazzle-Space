import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dayconn.com"),
  title: "Dayconn | Start the day with confidence",
  description: "Stay organized and stress-free. No clutter, no confusion, just simple scheduling.",
  openGraph: {
    title: "Dayconn | Start the day with confidence",
    description: "Stay organized and stress-free. No clutter, no confusion, just simple scheduling.",
    url: "https://dayconn.com",
    siteName: "Dayconn",
    images: [
      {
        url: "/og-image.png", // Placeholder
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dayconn | Start the day with confidence",
    description: "Stay organized and stress-free. No clutter, no confusion, just simple scheduling.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
