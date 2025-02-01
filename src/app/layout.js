import localFont from "next/font/local";
import "./globals.css";
import StartAnimation from "./components/common/StartAnimation";
import Nav from "./components/common/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const Oswald = localFont({
  src: "./fonts/Oswald-Bold.ttf",
  variable: "--font-oswald",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "zag",
  description: "marketing digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${Oswald.variable}  antialiased text-black`}
      >
        <StartAnimation />
        <div className="fixed top-0 h-24 z-10 w-full  bg-gradient-to-t from-transparent to-white"></div>{" "}
        <Nav />
        {children}
      </body>
    </html>
  );
}
