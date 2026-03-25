import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Flourish & Fix Maintenance | Quality Repairs You Can Trust',
  description: 'Reliable, professional home and business maintenance. From tiling to plumbing, we help your space flourish with fast, quality service.',
  keywords: ["maintenance, repairs, home repair, business maintenance, tiling, plumbing, renovation, South Africa, Flourish and Fix"],
  openGraph: {
    "title": "Flourish & Fix Maintenance | Quality Repairs You Can Trust",
    "description": "Reliable, professional home and business maintenance. From tiling to plumbing, we help your space flourish with fast, quality service.",
    "url": "https://www.flourishandfix.com",
    "siteName": "Flourish & Fix Maintenance",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/construction-tools-textured-grunge-paper-consisting-pipe-wrench-screwdriver-metal-hammer-free-copy-space-top_211682-105.jpg",
        "alt": "Maintenance worker performing repairs"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Flourish & Fix Maintenance | Quality Repairs You Can Trust",
    "description": "Reliable, professional home and business maintenance. From tiling to plumbing, we help your space flourish with fast, quality service.",
    "images": [
      "http://img.b2bpic.net/free-photo/construction-tools-textured-grunge-paper-consisting-pipe-wrench-screwdriver-metal-hammer-free-copy-space-top_211682-105.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
