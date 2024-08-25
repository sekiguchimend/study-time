import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "偏差値予測計算機",
  description: "今の偏差値と勉強時間だけで未来の偏差値とオススメの参考書を提示してくれるサイト",
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: "偏差値予測計算機",
    description: "今の偏差値と勉強時間だけで未来の偏差値とオススメの参考書を提示してくれるサイト",
    images: [
      {
        url: "https://study-time-32om.vercel.app/favicon.jpg",
        width: 800,
        height: 600,
      },
    ],
    url: "https://study-time-32om.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "偏差値予測計算機",
    description: "今の偏差値と勉強時間だけで未来の偏差値とオススメの参考書を提示してくれるサイト",
    images: ["https://study-time-32om.vercel.app/favicon.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}