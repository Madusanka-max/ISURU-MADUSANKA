import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chat/ChatWidget";

export const metadata: Metadata = {
  title: "Isuru Madusanka | Full-Stack Software Engineer",
  description: "Portfolio of Isuru Madusanka Rodrigo, a Full-Stack Software Engineer building clean, scalable web applications with real-world production experience. Features an AI assistant to answer questions.",
  keywords: ["Isuru Madusanka", "Software Engineer", "Full-Stack Developer", "Portfolio", "Next.js", "AI Assistant", "Sri Lanka"],
  authors: [{ name: "Isuru Madusanka Rodrigo" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://isurumadusanka.dev", // Update with actual URL later
    title: "Isuru Madusanka | Full-Stack Software Engineer",
    description: "Portfolio of Isuru Madusanka Rodrigo, a Full-Stack Software Engineer building clean, scalable web applications.",
    siteName: "Isuru Madusanka Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <body
        className="antialiased min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50"
      >
        <Navbar />
        <main className="flex-1 flex flex-col pt-16">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
