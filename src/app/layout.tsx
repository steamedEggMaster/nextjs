import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "../../components/navigation";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title : {
    template: "%s | Next Movies",
    // 하위의 Metadata의 문자열을 받아와 s에 띄워줌
    default: "Loading..."
    // 해당 부분이 Metadata가 없는 페이지의 제목으로 들어감
  },
  description: "Generated by create next app",
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
        <Navigation />
        {children}
      </body>
    </html>
  );
}
