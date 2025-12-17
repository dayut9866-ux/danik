import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danik Setyaningrum Tempe - Produsen Tempe Kedelai Premium di Salatiga",
  description: "Produsen tempe kedelai berkualitas tinggi di Salatiga. Danik Setyaningrum menyediakan tempe segar, frozen, dan organik dengan harga terjangkau. Pesan sekarang juga!",
  keywords: ["Danik Setyaningrum", "tempe kedelai", "tempe Salatiga", "tempe premium", "tempe segar", "tempe organik", "produsen tempe", "tempe murah", "tempe berkualitas"],
  authors: [{ name: "Danik Setyaningrum" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Danik Setyaningrum Tempe - Produsen Tempe Kedelai Premium",
    description: "Tempe kedelai berkualitas tinggi di Salatiga. Produk segar setiap hari dengan harga terjangkau.",
    url: "https://daniktempe.com",
    siteName: "Danik Setyaningrum Tempe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danik Setyaningrum Tempe - Tempe Kedelai Premium",
    description: "Produsen tempe kedelai berkualitas tinggi di Salatiga. Pesan sekarang juga!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
         <meta name="facebook-domain-verification" content="sa0t0jjf5tq36wh9xz8vxavyejdjeo" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
