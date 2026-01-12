import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raj Bhut - Full Stack Developer | Software Engineer Portfolio",
  description:
    "Raj Bhut is a Full Stack Developer specializing in React, Node.js, Docker, and cloud technologies. Explore innovative projects including OnComp, Hoster, and Paster. Available for software development opportunities.",
  keywords: [
    "Raj Bhut",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Node.js Developer",
    "Docker",
    "MongoDB",
    "PostgreSQL",
    "Web Development",
    "Portfolio",
    "OnComp",
    "Hoster",
    "Paster",
    "DevOps Engineer",
    "Cloud Computing",
  ],
  authors: [{ name: "Raj Bhut" }],
  creator: "Raj Bhut",
  publisher: "Raj Bhut",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rajb.tech",
    siteName: "Raj Bhut Portfolio",
    title: "Raj Bhut - Full Stack Developer | Software Engineer Portfolio",
    description:
      "Explore the portfolio of Raj Bhut, a Full Stack Developer specializing in React, Node.js, Docker, and modern web technologies. View innovative projects and get in touch.",
    images: [
      {
        url: "https://rajb.tech/raj_c.png",
        width: 800,
        height: 800,
        alt: "Raj Bhut - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Bhut - Full Stack Developer | Software Engineer Portfolio",
    description:
      "Full Stack Developer specializing in React, Node.js, Docker, and cloud technologies. View my projects and connect with me.",
    images: ["https://rajb.tech/raj_c.png"],
    creator: "@rajbhut",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://rajb.tech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
