import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kodi Sync",
  description:
    "Activate your Kodi device and stream your personal media files directly from Google Drive.",
  verification: {
    google: "zjBZ5m2pwsDv-anh7i79KYYdxOfGaz8kzW39tf-00Ns",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
