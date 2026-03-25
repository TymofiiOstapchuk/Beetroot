import type { Metadata } from "next";
import "@/app/globals.css";
import Nav from '@/components/Nav'


export const metadata: Metadata = {
  title: "Home page",
  description: "this is my awesome page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
