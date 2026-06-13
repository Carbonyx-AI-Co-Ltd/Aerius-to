import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aerius",
  description: "Aerius AI workspace preview.",
  icons: {
    icon: "/brand/Aerius/aerius-tab-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
