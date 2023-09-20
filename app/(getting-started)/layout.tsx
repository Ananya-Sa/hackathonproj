import ModalProvider from "@/provider/ModalProvider";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started",
  description: "Start using AICTE Meeting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
