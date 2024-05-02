import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Nav from "~/components/Nav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Awesome Gallery",
  description: "Next.js 14 app created by Rajat Gupta",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Nav />
        <div className="px-4">{children}</div>
      </body>
    </html>
  );
}
